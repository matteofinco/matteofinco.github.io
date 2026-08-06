import React, { useRef, useState, useCallback } from "react";

interface StickyObjectProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export const StickyObject: React.FC<StickyObjectProps> = ({
  children,
  className = "",
  strength = 0.25,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !isHovered) return;

    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    setPosition({ x: distanceX, y: distanceY });
  }, [isHovered, strength]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isHovered
          ? "transform 0.08s cubic-bezier(0.34, 1.56, 0.64, 1)"
          : "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </div>
  );
};
