import { useVoiceRecorderStore } from "./voice-recorder.store";

describe("voice-recorder.store", () => {
  beforeEach(() => {
    useVoiceRecorderStore.setState({
      audioUrl: null,
      audioBlob: null,
      status: "idle",
      playbackTime: 0,
      recorderTime: 0,
      isRecorderOpen: false,
    });
  });

  const audioMock = "audio-url";

  it("Добавить аудио url", () => {
    useVoiceRecorderStore.getState().actions.setAudioUrl(audioMock);
    expect(useVoiceRecorderStore.getState().audioUrl).toBe(audioMock);
  });

  it("Появление аудио дорожки", () => {
    useVoiceRecorderStore.getState().actions.openRecorder();
    expect(useVoiceRecorderStore.getState().isRecorderOpen).toBe(true);
  });

  it("Закрытие аудио дорожки", () => {
    useVoiceRecorderStore.getState().actions.openRecorder();
    useVoiceRecorderStore.getState().actions.closeRecorder();
    expect(useVoiceRecorderStore.getState().isRecorderOpen).toBe(false);
  });

  it("Очистка стора", () => {
    useVoiceRecorderStore.setState({
      audioUrl: audioMock,
      isRecorderOpen: true,
    });
    useVoiceRecorderStore.getState().actions.reset();
    expect(useVoiceRecorderStore.getState().audioUrl).toBe(null);
    expect(useVoiceRecorderStore.getState().isRecorderOpen).toBe(false);
  });
});
