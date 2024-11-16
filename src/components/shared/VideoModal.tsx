import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Dispatch } from "react";
import ReactPlayer from "react-player";
import { useEffect } from "react";

const VideoModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<boolean>;
}) => {
  // Effect to stop video playing when modal is closed
  useEffect(() => {
    // Logic can improve with state for paused
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[650px] p-0 overscroll-auto">
        <ReactPlayer
          playing={open}
          controls={true}
          width={"550px"}
          url="https://www.youtube.com/watch?v=dKqLc0rWLRo"
        />
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
