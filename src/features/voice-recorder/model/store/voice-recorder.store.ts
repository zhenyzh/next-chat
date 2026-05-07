import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { VoiceRecorderStore, VoiceRecorder } from "./voice-recorder.types";

const defaultFile: VoiceRecorder = {
  audioUrl: null,
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
      setStatus: (status) => {
        set((state) => {
          state.status = status;
        });
      },
      incrementPlaybackTime: () => {
        set((state) => {
          state.playbackTime += 1;
        });
      },
      incrementRecorderTime: () => {
        set((state) => {
          state.recorderTime += 1;
        });
      },
      resetRecorderTime: () => {
        set((state) => {
          state.recorderTime = 0;
        });
      },
      resetPlaybackTime: () => {
        set((state) => {
          state.playbackTime = 0;
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
