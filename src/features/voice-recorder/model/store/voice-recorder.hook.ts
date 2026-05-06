import { useShallow } from "zustand/react/shallow";
import { useVoiceRecorderStore } from "./voice-recorder.store";
import {
  audioUrlSelector,
  statusSelector,
  volumeSelector,
  barsSelector,
  barsCountSelector,
  playbackTimeSelector,
  recorderTimeSelector,
  isRecorderOpenSelector,
  allVoiceRecorderSelector,
  voiceRecorderActionsSelector,
} from "./voice-recorder.selectors";
import type { VoiceRecorderStore } from "./voice-recorder.types";

export const useAudioUrlVoiceRecorder = (): VoiceRecorderStore["audioUrl"] =>
  useVoiceRecorderStore(audioUrlSelector);

export const useStatusVoiceRecorder = (): VoiceRecorderStore["status"] =>
  useVoiceRecorderStore(statusSelector);

export const useRecorderTimeVoiceRecorder =
  (): VoiceRecorderStore["recorderTime"] =>
    useVoiceRecorderStore(recorderTimeSelector);

export const usePlaybackTimeVoiceRecorder =
  (): VoiceRecorderStore["playbackTime"] =>
    useVoiceRecorderStore(playbackTimeSelector);

export const useVolumeVoiceRecorder = (): VoiceRecorderStore["volume"] =>
  useVoiceRecorderStore(volumeSelector);

export const useBarsVoiceRecorder = (): VoiceRecorderStore["bars"] =>
  useVoiceRecorderStore(barsSelector);

export const useBarsCountVoiceRecorder = (): VoiceRecorderStore["barsCount"] =>
  useVoiceRecorderStore(barsCountSelector);

export const useIsOpenVoiceRecorder =
  (): VoiceRecorderStore["isRecorderOpen"] =>
    useVoiceRecorderStore(isRecorderOpenSelector);

export const useVoiceRecorderActions = (): VoiceRecorderStore["actions"] =>
  useVoiceRecorderStore(voiceRecorderActionsSelector);

export const useAllVoiceRecorder = (): {
  audioUrl: VoiceRecorderStore["audioUrl"];
  status: VoiceRecorderStore["status"];
  volume: VoiceRecorderStore["volume"];
  bars: VoiceRecorderStore["bars"];
  barsCount: VoiceRecorderStore["barsCount"];
  isRecorderOpen: VoiceRecorderStore["isRecorderOpen"];
  playbackTime: VoiceRecorderStore["playbackTime"];
  recorderTime: VoiceRecorderStore["recorderTime"];
} => useVoiceRecorderStore(useShallow(allVoiceRecorderSelector));
