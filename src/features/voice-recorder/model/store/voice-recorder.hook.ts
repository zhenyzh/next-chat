import { useShallow } from "zustand/react/shallow";
import { useVoiceRecorderStore } from "./voice-recorder.store";
import {
  audioUrlSelector,
  statusSelector,
  timeSelector,
  volumeSelector,
  barsSelector,
  barsCountSelector,
  isRecorderOpenSelector,
  allVoiceRecorderSelector,
  voiceRecorderActionsSelector,
} from "./voice-recorder.selectors";
import type { VoiceRecorderStore } from "./voice-recorder.types";

export const useAudioUrlVoiceRecorder = (): VoiceRecorderStore["audioUrl"] =>
  useVoiceRecorderStore(audioUrlSelector);

export const useStatusVoiceRecorder = (): VoiceRecorderStore["status"] =>
  useVoiceRecorderStore(statusSelector);

export const useTimeVoiceRecorder = (): VoiceRecorderStore["time"] =>
  useVoiceRecorderStore(timeSelector);

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
  time: VoiceRecorderStore["time"];
  volume: VoiceRecorderStore["volume"];
  bars: VoiceRecorderStore["bars"];
  barsCount: VoiceRecorderStore["barsCount"];
  isRecorderOpen: VoiceRecorderStore["isRecorderOpen"];
} => useVoiceRecorderStore(useShallow(allVoiceRecorderSelector));
