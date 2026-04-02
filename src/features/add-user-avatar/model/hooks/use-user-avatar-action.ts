import { useMutation } from "@tanstack/react-query";
import { addUserAvatarApi } from "@/features/add-user-avatar/api";
import { userApi } from "@/entities/user/api";
import { queryClient } from "@/shared/api";

export function useUserAvatarAction() {
  const queryKeyUser = userApi.getUserQueryOptions().queryKey;

  const mutation = useMutation({
    mutationFn: addUserAvatarApi.sendFile,
    onMutate: async (file: File) => {
      await queryClient.cancelQueries({ queryKey: queryKeyUser });

      const previousUser = queryClient.getQueryData(queryKeyUser);

      const mockAvatarUrl = URL.createObjectURL(file);

      queryClient.setQueryData(queryKeyUser, (old) =>
        old ? { ...old, avatarUrl: mockAvatarUrl } : old,
      );

      return {
        previousUser,
        mockAvatarUrl,
      };
    },

    onSuccess: ({ avatarUrl }) => {
      queryClient.setQueryData(queryKeyUser, (old) =>
        old ? { ...old, avatarUrl } : old,
      );
    },

    onError: (_, __, context) => {
      queryClient.setQueryData(queryKeyUser, context?.previousUser);
    },

    onSettled: (_, __, ___, context) => {
      queryClient.invalidateQueries({ queryKey: queryKeyUser });
      if (context?.mockAvatarUrl) {
        URL.revokeObjectURL(context.mockAvatarUrl);
      }
    },
  });

  const onSendUserAvatar = (file: File) => {
    mutation.mutate(file);
  };

  return {
    onSendUserAvatar,
    isPending: mutation.isPending,
    error: mutation.error,
  };
}
