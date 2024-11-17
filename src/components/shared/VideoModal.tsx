"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Dispatch, useEffect, useRef } from "react";

const VideoModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<boolean>;
}) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Effect to pause the video when modal is closed
  useEffect(() => {
    if (iframeRef.current) {
      if (open) {
        // Play the video by changing the src (or other method)
        iframeRef.current.contentWindow?.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          "*"
        );
      } else {
        // Pause the video
        iframeRef.current.contentWindow?.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      }
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-fit  p-0 bg-transparent border-none">
        <iframe
          ref={iframeRef}
          className="lg:w-[650px] lg:h-[400px] md:w-[450px] md:h-[300px] w-[280px] h-[200px] "
          src="https://www.youtube.com/embed/dKqLc0rWLRo?enablejsapi=1" // Use embed link with enablejsapi
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
