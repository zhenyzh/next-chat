import { useMutation } from "@tanstack/react-query";
import { sendMessageApi } from "@/features/send-message/api";
import {
  useMessageActions,
  useMessage,
} from "@/features/send-message/model/store";
import { messagesApi, type MessagesDto } from "@/entities/messages/api";
import { useGetUserQuery } from "@/entities/user/model/hooks";
import { useChatsOpenCacheQuery } from "@/entities/chats/model/hooks";
import { queryClient } from "@/shared/query-client";

export function useSendMessage() {
  const { user } = useGetUserQuery();
  const { chatId } = useChatsOpenCacheQuery();
  const message = useMessage();
  const { clearMessage } = useMessageActions();

  const queryKey = messagesApi.getMessageQueryOptions({ chatId }).queryKey;

  const mutation = useMutation({
    mutationFn: sendMessageApi.sendMessage,
    onMutate: async (newMessage) => {
      await queryClient.cancelQueries({ queryKey });

      const previousMessage = queryClient.getQueryData(queryKey);

      const messageId = Date.now();

      queryClient.setQueryData(queryKey, (old = []) => [
        ...old,
        {
          id: messageId,
          chatId: newMessage.chatId,
          senderId: newMessage.senderId,
          sender: user,
          text: newMessage.text,
          createdAt: new Date().toISOString(),
        } as MessagesDto,
      ]);

      return { previousMessage, messageId };
    },

    onSuccess: (data, _, context) => {
      queryClient.setQueryData(queryKey, (old = []) =>
        old.map((msg) => (msg.id === context.messageId ? data : msg)),
      );
      clearMessage();
    },

    onError: (_, __, context) => {
      queryClient.setQueryData(queryKey, context?.previousMessage);
    },

    onSettled: () => queryClient.invalidateQueries({ queryKey }),
  });

  const onSendMessage = () => {
    mutation.mutate({ chatId, senderId: user.id, text: message });
  };

  return {
    onSendMessage,
    isPending: mutation.isPending,
    error: mutation.error,
  };
}
