import { Music, Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import BGM from "@/app/assets/BGM.mp3";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.log("Audio playback failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3; // Set default volume to 30%
    }
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex gap-2">
      {/* Main music toggle button */}
      <button
        onClick={togglePlay}
        className="p-4 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
        style={{
          backgroundColor: isPlaying ? "#8ba888" : "#b89f8f",
          color: "#ffffff",
        }}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        title={isPlaying ? "Pause music" : "Play music"}
      >
        <Music size={24} className={isPlaying ? "animate-pulse" : ""} />
      </button>

      {/* Mute/unmute button; only shown when music is playing */}
      {isPlaying && (
        <button
          onClick={toggleMute}
          className="p-4 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
          style={{
            backgroundColor: "#b89f8f",
            color: "#ffffff",
          }}
          aria-label={isMuted ? "Unmute music" : "Mute music"}
          title={isMuted ? "Unmute music" : "Mute music"}
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
      )}

      {/* Audio element */}
      <audio
        ref={audioRef}
        loop
        src={BGM}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
}
