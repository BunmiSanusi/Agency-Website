import { Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

// Slide Variants
export const SlideUp = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay },
  },
});

export const SlideDown = (delay: number): Variants => ({
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay },
  },
});

export const SlideLeft = (delay: number): Variants => ({
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay },
  },
});

export const SlideRight = (delay: number): Variants => ({
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay },
  },
});

// Fade In
export const FadeIn = (direction: Direction, delay: number): Variants => ({
  hidden: {
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    opacity: 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1.2,
      delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});
