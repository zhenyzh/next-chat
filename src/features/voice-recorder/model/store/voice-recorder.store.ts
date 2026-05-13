import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { VoiceRecorderStore, VoiceRecorder } from "./voice-recorder.types";

const defaultFile: VoiceRecorder = {
  audioUrl: null,
  audioBlob: null,
  status: "idle",
  playbackTime: 0,
  recorderTime: 0,
  isRecorderOpen: false,
};

export const useVoiceRecorderStore = create<VoiceRecorderStore>()(
  immer((set) => ({
    ...defaultFile,
    actions: {
      setAudioUrl: (audioUrl) => {
        set((state) => {
          state.audioUrl = audioUrl;
        });
      },
      setAudioBlob: (audioBlob) => {
        set((state) => {
          state.audioBlob = audioBlob;
        });
      },
      setStatus: (status) => {
        set((state) => {
          state.status = status;
        });
      },
      setPlaybackTime: (time) => {
        set((state) => {
          state.playbackTime = time;
        });
      },
      setRecorderTime: (time) => {
        set((state) => {
          state.recorderTime = time;
        });
      },
      openRecorder: () => {
        set((state) => {
          state.isRecorderOpen = true;
        });
      },
      closeRecorder: () => {
        set((state) => {
          state.isRecorderOpen = false;
        });
      },
      reset: () => set(defaultFile),
    },
  })),
);
