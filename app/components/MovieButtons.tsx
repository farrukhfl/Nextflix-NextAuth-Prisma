"use client";

import { Button } from "@/components/ui/button";
import { InfoIcon, PlayCircle } from "lucide-react";
import { useState } from "react";
import PlayVideoModal from "./PlayVideoModal";

interface iAppProps {
  title: string;
  overview: string;
  youtubeUrl: string;
  age: number;
  id: number;
  releaseDate: number;
  duration: number;
}

export default function MovieButtons({
  age,
  duration,
  id,
  overview,
  releaseDate,
  title,
  youtubeUrl,
}: iAppProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} className="text-lg font-medium">
        <PlayCircle className="mr-2 h-6 w-6" />
        Play
      </Button>
      <Button
        onClick={() => setOpen(true)}
        className=" bg-white/40 text-lg font-medium hover:bg-white/30 text-white"
      >
        <InfoIcon className="mr-2 h-6 w-6" />
        Learn more
      </Button>
      <PlayVideoModal
        state={open}
        changeState={setOpen}
        age={age}
        duration={duration}
        key={id}
        overview={overview}
        release={releaseDate}
        title={title}
        youtubeUrl={youtubeUrl}
      />
    </>
  );
}
