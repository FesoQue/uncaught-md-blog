import { MouseEvent } from "react";
import { useMotionValue } from "framer-motion";

const useSpotlight = () => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return { mouseX, mouseY, handleMouseMove };
};

export default useSpotlight;
