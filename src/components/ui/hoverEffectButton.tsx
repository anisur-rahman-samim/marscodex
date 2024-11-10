import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const HoverEffectButton = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        "px-8 z-30 py-4 bg-rose-400 rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#F27714] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-1000 [text-shadow:3px_5px_2px_#000;] hover:[text-shadow:2px_2px_2px_#000] text-2xl",
        className
      )}
    >
      {children}
    </button>
  );
};

export default HoverEffectButton;
