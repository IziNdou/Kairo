import { motion, useScroll, useTransform } from "motion/react";
import { ReactNode, useRef } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  type?: "fade" | "slideUp" | "slideLeft" | "slideRight" | "scale" | "parallax";
  parallaxSpeed?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  type = "slideUp",
  parallaxSpeed = 0.5,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * parallaxSpeed, -100 * parallaxSpeed]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  const variants = {
    fade: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
    },
    slideUp: {
      initial: { opacity: 0, y: 60 },
      whileInView: { opacity: 1, y: 0 },
    },
    slideLeft: {
      initial: { opacity: 0, x: 60 },
      whileInView: { opacity: 1, x: 0 },
    },
    slideRight: {
      initial: { opacity: 0, x: -60 },
      whileInView: { opacity: 1, x: 0 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      whileInView: { opacity: 1, scale: 1 },
    },
    parallax: {
      initial: {},
      whileInView: {},
    },
  };

  if (type === "parallax") {
    return (
      <motion.div ref={ref} style={{ y, opacity }} className={className}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      variants={variants[type]}
      className={className}
    >
      {children}
    </motion.div>
  );
}
