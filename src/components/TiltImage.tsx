import { useState, useRef, useEffect } from "react";

interface TiltImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function TiltImage({ src, alt, className = "" }: TiltImageProps) {
  const [isHovering, setIsHovering] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -20;
    const rotateY = ((x - centerX) / centerX) * 20;

    const shadowX = (rotateY / 20) * 10;
    const shadowY = (-rotateX / 20) * 10;
    const shadowBlur = Math.abs(rotateX) + Math.abs(rotateY) + 20;

    imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    imageRef.current.style.boxShadow = `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, 0.2)`;
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;
    setIsHovering(false);
    imageRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    imageRef.current.style.boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.1)";
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  useEffect(() => {
    const element = imageRef.current;
    if (!element) return;

    if (isHovering) {
      element.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovering]);

  return (
    <div
      ref={imageRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`transition-all duration-200 ease-out rounded-full ${className}`}
      style={{
        transformStyle: "preserve-3d",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-700"
      />
    </div>
  );
}
