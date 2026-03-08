"use client";

import { useState, useCallback, useRef, useEffect } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

interface ScrambleHoverProps {
  text: string;
  className?: string;
  speed?: number; // ms per frame (default 28)
}

export function ScrambleHover({ text, className = "", speed = 28 }: ScrambleHoverProps) {
  const [display, setDisplay] = useState(text);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const frame = useRef(0);

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const scramble = useCallback(() => {
    frame.current = 0;
    const total = text.replace(/ /g, "").length * 4;
    clearTimer();

    timerRef.current = setInterval(() => {
      frame.current++;
      const revealed = Math.floor((frame.current / total) * text.length);

      setDisplay(
        text
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (i < revealed) return text[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (frame.current >= total) {
        clearTimer();
        setDisplay(text);
      }
    }, speed);
  }, [text, speed]);

  useEffect(() => () => clearTimer(), []);

  return (
    <span
      className={className}
      onMouseEnter={scramble}
      onMouseLeave={() => {
        clearTimer();
        setDisplay(text);
      }}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
