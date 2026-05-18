export function formDataVoiceRecorder(
  chatId: number | undefined,
  senderId: number | undefined,
  audioBlob: Blob,
  clientId?: string,
) {
  const formData = new FormData();
  formData.append("file", audioBlob, "voice.webm");
  formData.append("chatId", String(chatId));
  formData.append("senderId", String(senderId));
  if (clientId) {
    formData.append("clientId", clientId);
  }
  return formData;
}
