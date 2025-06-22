"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

interface Children {
  children?: React.ReactNode;
}

export function SmoothFollower({ children }: Children) {
  const [isClient, setIsClient] = useState(false);
  const mousePosition = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });
  const borderDotPosition = useRef({ x: 0, y: 0 });
  const scrollSmootherRef = useRef<ScrollSmoother | null>(null);

  const [renderPos, setRenderPos] = useState({
    dot: { x: 0, y: 0 },
    border: { x: 0, y: 0 },
  });
  const [isHovering, setIsHovering] = useState(false);

  const DOT_SMOOTHNESS = 0.2;
  const BORDER_DOT_SMOOTHNESS = 0.1;

  // First useEffect to set client state
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Second useEffect for ScrollSmoother and mouse tracking
  useEffect(() => {
    if (!isClient) return;

    // Initialize ScrollSmoother
    scrollSmootherRef.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5, // Smoothness factor (higher = smoother but slower response)
      effects: true, // Enable data-speed effects
      smoothTouch: 0.1, // Smooth scrolling on touch devices (0 = disabled)
      normalizeScroll: true, // Normalize scroll across different browsers
      ignoreMobileResize: true, // Ignore mobile resize events
    });

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);

    const interactiveElements = document.querySelectorAll(
      "a, button, img, input, textarea, select",
    );
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    // Animation function for smooth cursor movement
    const animate = () => {
      const lerp = (start: number, end: number, factor: number) => {
        return start + (end - start) * factor;
      };

      dotPosition.current.x = lerp(
        dotPosition.current.x,
        mousePosition.current.x,
        DOT_SMOOTHNESS,
      );
      dotPosition.current.y = lerp(
        dotPosition.current.y,
        mousePosition.current.y,
        DOT_SMOOTHNESS,
      );

      borderDotPosition.current.x = lerp(
        borderDotPosition.current.x,
        mousePosition.current.x,
        BORDER_DOT_SMOOTHNESS,
      );
      borderDotPosition.current.y = lerp(
        borderDotPosition.current.y,
        mousePosition.current.y,
        BORDER_DOT_SMOOTHNESS,
      );

      setRenderPos({
        dot: { x: dotPosition.current.x, y: dotPosition.current.y },
        border: {
          x: borderDotPosition.current.x,
          y: borderDotPosition.current.y,
        },
      });

      requestAnimationFrame(animate);
    };

    // Start animation loop
    const animationId = requestAnimationFrame(animate);

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });

      cancelAnimationFrame(animationId);

      // Clean up ScrollSmoother
      if (scrollSmootherRef.current) {
        scrollSmootherRef.current.kill();
      }

      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isClient]);

  // Always render the children, but only render cursor on client
  return (
    <>
      {isClient && (
        <div className="pointer-events-none fixed inset-0 z-50 hidden xl:block">
          <div
            className="bg-primary absolute rounded-full"
            style={{
              width: "8px",
              height: "8px",
              transform: "translate(-50%, -50%)",
              left: `${renderPos.dot.x}px`,
              top: `${renderPos.dot.y}px`,
            }}
          />

          <div
            className="border-primary absolute rounded-full border"
            style={{
              width: isHovering ? "44px" : "28px",
              height: isHovering ? "44px" : "28px",
              transform: "translate(-50%, -50%)",
              left: `${renderPos.border.x}px`,
              top: `${renderPos.border.y}px`,
              transition:
                "width 0.3s, height 0.3s, backdrop-filter 0.3s, background-color 0.3s",
              backdropFilter: isHovering ? "blur(8px)" : "none",
              backgroundColor: isHovering
                ? "rgba(255, 255, 255, 0.1)"
                : "transparent",
              // Alternative: use your theme colors
              // backgroundColor: isHovering ? "rgba(var(--primary), 0.1)" : "transparent",
            }}
          />
        </div>
      )}

      {/* ScrollSmoother wrapper structure */}
      <div id="smooth-wrapper" className="cursor-none">
        <div id="smooth-content">
          <section>
            <div className="relative z-10">{children}</div>
          </section>
        </div>
      </div>
    </>
  );
}
