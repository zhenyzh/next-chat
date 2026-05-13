import { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";
import RecordPlugin from "wavesurfer.js/plugins/record";
import { useVoiceRecorderActions } from "../../model/store";

export function useWaveVoiceRecorder() {
  const {
    setAudioUrl,
    setAudioBlob,
    setStatus,
    setRecorderTime,
    setPlaybackTime,
  } = useVoiceRecorderActions();

  const containerRef = useRef<HTMLDivElement>(null);
  const waveSurferRef = useRef<WaveSurfer>(null);
  const recordRef = useRef<RecordPlugin>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const waveSurfer = WaveSurfer.create({
      container: containerRef.current,
      waveColor: "#fff",
      progressColor: "#fff",
      height: 20,
      barWidth: 3,
      barGap: 2,
      barRadius: 999,
      cursorWidth: 0,
      normalize: true,
      minPxPerSec: 1,
    });
    const record = waveSurfer.registerPlugin(
      RecordPlugin.create({
        scrollingWaveform: true,
        continuousWaveform: true,
        continuousWaveformDuration: 18,
      }),
    );
    record.on("record-start", () => {
      setStatus("recording");
    });
    record.on("record-end", (blob: Blob) => {
      const url = URL.createObjectURL(blob);
      setAudioBlob(blob);
      setAudioUrl(url);
      setStatus("paused_recording");
    });
    record.on("record-progress", (ms) => {
      setRecorderTime(Math.floor(ms / 1000));
    });
    waveSurfer.on("timeupdate", (seconds) => {
      setPlaybackTime(Math.floor(seconds));
    });
    waveSurfer.on("finish", () => {
      waveSurferRef.current?.stop();
      setStatus("ready");
    });
    waveSurferRef.current = waveSurfer;
    recordRef.current = record;
    return () => {
      record.destroy();
      waveSurfer.destroy();
    };
  }, [setAudioUrl, setAudioBlob, setStatus, setPlaybackTime, setRecorderTime]);

  return { containerRef, waveSurferRef, recordRef };
}
