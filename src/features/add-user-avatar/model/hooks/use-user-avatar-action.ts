import { useMutation } from "@tanstack/react-query";
import { updateMessagesData, updateUserData } from "../../lib/utils";
import { addUserAvatarApi } from "@/features/add-user-avatar/api";
import { userApi } from "@/entities/user/api";
import { messagesApi } from "@/entities/messages/api";
import { useOpenCurrentChat } from "@/entities/chat/model/hooks";
import { queryClient } from "@/shared/api";

export function useUserAvatarAction() {
  const { chatId } = useOpenCurrentChat();

  const queryKeyUser = userApi.getUserQueryOptions().queryKey;
  const queryKeyMessages = messagesApi.getMessageQueryOptions({
    chatId,
  }).queryKey;

  const mutation = useMutation({
    mutationFn: addUserAvatarApi.sendFile,
    onMutate: async (file: File) => {
      await queryClient.cancelQueries({ queryKey: queryKeyUser });
      await queryClient.cancelQueries({ queryKey: queryKeyMessages });

      const previousUser = queryClient.getQueryData(queryKeyUser);
      const previousMessages = queryClient.getQueryData(queryKeyMessages);

      const mockAvatarUrl = URL.createObjectURL(file);

      updateUserData(queryKeyUser, mockAvatarUrl);
      updateMessagesData(queryKeyMessages, mockAvatarUrl, previousUser?.id);

      return {
        previousUser,
        previousMessages,
        mockAvatarUrl,
        senderId: previousUser?.id,
      };
    },

    onSuccess: ({ avatarUrl }, _, context) => {
      updateUserData(queryKeyUser, avatarUrl);
      updateMessagesData(queryKeyMessages, avatarUrl, context?.senderId);
    },

    onError: (_, __, context) => {
      queryClient.setQueryData(queryKeyUser, context?.previousUser);
      queryClient.setQueryData(queryKeyMessages, context?.previousMessages);
    },

    onSettled: (_, __, ___, context) => {
      queryClient.invalidateQueries({ queryKey: queryKeyUser });
      queryClient.invalidateQueries({ queryKey: queryKeyMessages });
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
