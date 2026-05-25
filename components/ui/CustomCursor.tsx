"use client";
import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    let mouseX = 0, mouseY = 0;
    let outX = 0, outY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + "px";
      dot.style.top = mouseY + "px";
    };

    const animate = () => {
      outX += (mouseX - outX) * 0.12;
      outY += (mouseY - outY) * 0.12;
      outline.style.left = outX + "px";
      outline.style.top = outY + "px";
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    animate();

    return () => { document.removeEventListener("mousemove", onMove); };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={outlineRef} className="cursor-outline hidden md:block" />
    </>
  );
}
