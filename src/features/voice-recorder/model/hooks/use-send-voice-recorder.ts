import { useMutation } from "@tanstack/react-query";
import { voiceRecorderApi } from "../../api";
import {
  useAudioBlobVoiceRecorder,
  useVoiceRecorderActions,
} from "../../model/store";
import { useUser } from "@/entities/user/model/store";
import { useCurrentChat } from "@/entities/chat/model/hooks";
import { messagesApi, type MessagesDto } from "@/entities/messages/api";
import { queryClient } from "@/shared/api";

export function useSendVoiceRecorder() {
  const user = useUser();
  const { chatId } = useCurrentChat();
  const audioBlob = useAudioBlobVoiceRecorder();
  const { reset } = useVoiceRecorderActions();

  const queryKey = messagesApi.getMessageQueryOptions({ chatId }).queryKey;

  const mutation = useMutation({
    mutationFn: voiceRecorderApi.sendAudio,
    onMutate: async (newData) => {
      await queryClient.cancelQueries({ queryKey });

      const previousMessage = queryClient.getQueryData(queryKey);

      const mockMessage = {
        id: Math.floor(Math.random() * 100),
        ...newData,
        sender: user,
        createdAt: new Date().toISOString(),
        clientId: crypto.randomUUID(),
        isSent: true,
        isRead: false,
        isDelivered: false,
      } satisfies MessagesDto;

      queryClient.setQueryData(queryKey, (old = []) => [...old, mockMessage]);

      return { previousMessage, clientId: newData.clientId };
    },

    onSuccess: (data, _, context) => {
      queryClient.setQueryData(queryKey, (old) =>
        (old ?? []).map((msg) =>
          msg.clientId === context.clientId ? data : msg,
        ),
      );
    },

    onError: (_, __, context) => {
      queryClient.setQueryData(queryKey, context?.previousMessage);
    },

    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey });
      reset();
    },
  });

  const onSendVoiceRecord = () => {
    if (!audioBlob) return;
    mutation.mutate({
      chatId,
      senderId: user.id,
      audioBlob,
      clientId: crypto.randomUUID(),
    });
  };

  return {
    onSendVoiceRecord,
    isPending: mutation.isPending,
    error: mutation.error,
  };
}
