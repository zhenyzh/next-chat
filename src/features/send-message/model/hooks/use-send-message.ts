import { useMutation } from "@tanstack/react-query";
import { sendMessageApi } from "../../api";
import { useMessageActions, useMessage } from "../store";
import { messagesApi, type MessagesDto } from "@/entities/messages/api";
import { useGetUserQuery } from "@/entities/user/model/hooks";
import { useChatOpenCacheQuery } from "@/entities/chat/model/hooks";
import { queryClient } from "@/shared/query-client";

export function useSendMessage() {
  const { user } = useGetUserQuery();
  const { chatId } = useChatOpenCacheQuery();
  const message = useMessage();
  const { clearMessage } = useMessageActions();

  const queryKey = messagesApi.getMessageQueryOptions({ chatId }).queryKey;
  const clientId = crypto.randomUUID();

  const mutation = useMutation({
    mutationFn: sendMessageApi.sendMessage,
    onMutate: async (newMessage) => {
      await queryClient.cancelQueries({ queryKey });

      const previousMessage = queryClient.getQueryData(queryKey);

      const mockMessage = {
        id: Date.now(),
        chatId: newMessage.chatId,
        senderId: newMessage.senderId,
        sender: user,
        text: newMessage.text,
        createdAt: new Date().toISOString(),
        clientId,
      } satisfies MessagesDto;

      queryClient.setQueryData(queryKey, (old = []) => [...old, mockMessage]);

      return { previousMessage, clientId };
    },

    onSuccess: (data, _, context) => {
      queryClient.setQueryData(queryKey, (old) =>
        (old ?? []).map((msg) =>
          msg.clientId === context.clientId ? data : msg,
        ),
      );
      clearMessage();
    },

    onError: (_, __, context) => {
      queryClient.setQueryData(queryKey, context?.previousMessage);
    },

    onSettled: () => queryClient.invalidateQueries({ queryKey }),
  });

  const onSendMessage = () => {
    mutation.mutate({ chatId, senderId: user.id, text: message, clientId });
  };

  return {
    onSendMessage,
    isPending: mutation.isPending,
    error: mutation.error,
  };
}
