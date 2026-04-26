import { useMutation } from "@tanstack/react-query";
import { addUserAvatarApi } from "../../api";
import { updateUserCache, updateMessagesCache } from "../../lib/utils";
import { userApi } from "@/entities/user/api";
import { messagesApi } from "@/entities/messages/api";
import { useCurrentChat } from "@/entities/chat/model/hooks";
import { queryClient } from "@/shared/api";

export function useSendUserAvatar() {
  const { chatId } = useCurrentChat();

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

      updateUserCache(queryKeyUser, mockAvatarUrl);
      updateMessagesCache(queryKeyMessages, mockAvatarUrl, previousUser?.id);

      return {
        previousUser,
        previousMessages,
        mockAvatarUrl,
        senderId: previousUser?.id,
      };
    },

    onSuccess: ({ avatarUrl }, _, context) => {
      updateUserCache(queryKeyUser, avatarUrl);
      updateMessagesCache(queryKeyMessages, avatarUrl, context?.senderId);
    },

    onError: (_, __, context) => {
      queryClient.setQueryData(queryKeyUser, context?.previousUser);
      queryClient.setQueryData(queryKeyMessages, context?.previousMessages);
    },

    onSettled: (_, __, ___, context) => {
      void queryClient.invalidateQueries({ queryKey: queryKeyUser });
      void queryClient.invalidateQueries({ queryKey: queryKeyMessages });
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
