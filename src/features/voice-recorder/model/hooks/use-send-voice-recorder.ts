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
  const clientId = crypto.randomUUID();

  const mutation = useMutation({
    mutationFn: voiceRecorderApi.sendAudio,
    onMutate: async ({ audioBlob, ...newData }) => {
      await queryClient.cancelQueries({ queryKey });

      const mockAudioUrl = URL.createObjectURL(audioBlob);
      const previousMessage = queryClient.getQueryData(queryKey);

      const mockMessage = {
        id: Math.floor(Math.random() * 100),
        ...newData,
        sender: user,
        audio: {
          id: clientId,
          name: "voice.webm",
          url: mockAudioUrl,
          size: audioBlob.size,
          type: "audio",
        },
        createdAt: new Date().toISOString(),
        clientId,
        isSent: true,
        isRead: false,
        isDelivered: false,
      } satisfies MessagesDto;

      queryClient.setQueryData(queryKey, (old = []) => [...old, mockMessage]);

      return { previousMessage, mockAudioUrl, clientId: newData.clientId };
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

    onSettled: async (_, __, ___, context) => {
      await queryClient.invalidateQueries({ queryKey });
      if (context?.mockAudioUrl) {
        URL.revokeObjectURL(context.mockAudioUrl);
      }
      reset();
    },
  });

  const onSendVoiceRecord = (blob: Blob) => {
    mutation.mutate({
      chatId,
      senderId: user.id,
      audioBlob: audioBlob ?? blob,
      clientId,
    });
  };

  return {
    onSendVoiceRecord,
    isPending: mutation.isPending,
    error: mutation.error,
  };
}
