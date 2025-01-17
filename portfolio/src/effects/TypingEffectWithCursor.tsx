import { useState, useEffect } from "react";

interface TypingEffectWithCursorProps {
    text: string;
}
  
export default function TypingEffectWithCursor({ text }: TypingEffectWithCursorProps) {
    const speed = 100, cursorBlinkSpeed = 500;
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [cursorVisible, setCursorVisible] = useState(true);
  
    useEffect(() => {
      if (index < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[index]);
          setIndex((prev) => prev + 1);
        }, speed);
  
        return () => clearTimeout(timeout);
      }
    }, [index, text, speed]);
  
    useEffect(() => {
      const cursorInterval = setInterval(() => {
        setCursorVisible((prev) => !prev);
      }, cursorBlinkSpeed);
  
      return () => clearInterval(cursorInterval);
    }, [cursorBlinkSpeed]);
  
    return (
      <>
        {displayedText}
        <span style={{ visibility: cursorVisible ? "visible" : "hidden" }}>|</span>
      </>
    );
};