"use client";

import { useState } from "react";
import PulseShadow from "../ui/PulseShadow";
import { Play } from "lucide-react";
import VideoModal from "../shared/VideoModal";

const PlayButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <PulseShadow>
        <div
          className="bg-primary-blue p-2 rounded-full hover:animate-pulse cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <Play color="#fff" fill="#fff" />
        </div>
      </PulseShadow>
      <VideoModal open={open} setOpen={setOpen}></VideoModal>
    </>
  );
};

export default PlayButton;
