import { useGetUserQuery } from "@/entities/user/model/hooks";
import { useChatsOpenMutation } from "@/entities/chats/model/hooks";
import { useMutation } from "@tanstack/react-query";
import { sendMessageApi } from "@/features/send-message/api";
import {
  useMessageActions,
  useTextMessage,
} from "@/features/send-message/model/store";
import { queryClient } from "@/shared/query-client";
import { messagesApi } from "@/entities/messages/api";

export function useSendMessage() {
  const { user: { id: senderId } = {} } = useGetUserQuery();
  const { chatId } = useChatsOpenMutation();
  const text = useTextMessage();
  const { clearMessage } = useMessageActions();

  const mutation = useMutation({
    mutationFn: sendMessageApi.sendMessage,
  });

  const onSendMessage = () => {
    mutation.mutate(
      { chatId, senderId, text },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: messagesApi.getMessageQueryOptions({ chatId }).queryKey,
          });
          clearMessage();
        },
      },
    );
  };

  return {
    onSendMessage,
    isPending: mutation.isPending,
    error: mutation.error,
  };
}
