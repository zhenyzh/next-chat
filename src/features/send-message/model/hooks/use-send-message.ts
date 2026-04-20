import { useMutation } from "@tanstack/react-query";
import { sendMessageApi } from "../../api";
import { useMessageActions, useMessage } from "../store";
import {
  useFilesAttach,
  useFilesAttachActions,
} from "@/features/file-attach/model/store";
import { messagesApi, type MessagesDto } from "@/entities/messages/api";
import { useOpenCurrentChat } from "@/entities/chat/model/hooks";
import { useUser } from "@/entities/user/model/store";
import { queryClient } from "@/shared/api";

export function useSendMessage() {
  const user = useUser();
  const { chatId } = useOpenCurrentChat();
  const { clearMessage } = useMessageActions();
  const { clearFiles } = useFilesAttachActions();
  const message = useMessage();
  const files = useFilesAttach();

  const queryKey = messagesApi.getMessageQueryOptions({ chatId }).queryKey;
  const clientId = crypto.randomUUID();

  const mutation = useMutation({
    mutationFn: sendMessageApi.sendMessage,
    onMutate: async (newMessage) => {
      await queryClient.cancelQueries({ queryKey });

      const previousMessage = queryClient.getQueryData(queryKey);

      const mockMessage = {
        id: Math.floor(Math.random() * 100),
        ...newMessage,
        sender: user,
        createdAt: new Date().toISOString(),
        clientId,
        isSent: true,
        isRead: false,
        isDelivered: false,
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
      clearFiles();
    },

    onError: (_, __, context) => {
      queryClient.setQueryData(queryKey, context?.previousMessage);
    },

    onSettled: () => queryClient.invalidateQueries({ queryKey }),
  });

  const onSendMessage = () => {
    mutation.mutate({
      chatId,
      senderId: user.id,
      text: message,
      clientId,
      attachments: files,
    });
  };

  return {
    onSendMessage,
    isPending: mutation.isPending,
    error: mutation.error,
  };
}
