import { useShallow } from "zustand/react/shallow";
import { useVoiceRecorderStore } from "./voice-recorder.store";
import {
  audioUrlSelector,
  statusSelector,
  audioBlobSelector,
  playbackTimeSelector,
  recorderTimeSelector,
  isRecorderOpenSelector,
  allVoiceRecorderSelector,
  voiceRecorderActionsSelector,
} from "./voice-recorder.selectors";
import type { VoiceRecorderStore } from "./voice-recorder.types";

export const useAudioUrlVoiceRecorder = (): VoiceRecorderStore["audioUrl"] =>
  useVoiceRecorderStore(audioUrlSelector);

export const useAudioBlobVoiceRecorder = (): VoiceRecorderStore["audioBlob"] =>
  useVoiceRecorderStore(audioBlobSelector);

export const useStatusVoiceRecorder = (): VoiceRecorderStore["status"] =>
  useVoiceRecorderStore(statusSelector);

export const useRecorderTimeVoiceRecorder =
  (): VoiceRecorderStore["recorderTime"] =>
    useVoiceRecorderStore(recorderTimeSelector);

export const usePlaybackTimeVoiceRecorder =
  (): VoiceRecorderStore["playbackTime"] =>
    useVoiceRecorderStore(playbackTimeSelector);

export const useIsOpenVoiceRecorder =
  (): VoiceRecorderStore["isRecorderOpen"] =>
    useVoiceRecorderStore(isRecorderOpenSelector);

export const useVoiceRecorderActions = (): VoiceRecorderStore["actions"] =>
  useVoiceRecorderStore(voiceRecorderActionsSelector);

export const useAllVoiceRecorder = (): {
  audioUrl: VoiceRecorderStore["audioUrl"];
  status: VoiceRecorderStore["status"];
  isRecorderOpen: VoiceRecorderStore["isRecorderOpen"];
  playbackTime: VoiceRecorderStore["playbackTime"];
  recorderTime: VoiceRecorderStore["recorderTime"];
} => useVoiceRecorderStore(useShallow(allVoiceRecorderSelector));
