"use client";
import { Button } from "@/components/ui/button";
import { Heart, PlayCircle, PlayIcon } from "lucide-react";
import { useState } from "react";
import PlayVideoModal from "./PlayVideoModal";
import { addToWatchList, deleteFromWatchList } from "../action";
import { usePathname } from "next/navigation";

interface iAppProps {
  title: string;
  overview: string;
  movieId: number;
  watchList: boolean;
  watchListId: string;
  youtubeUrl: string;
  year: number;
  age: number;
  time: number;
}
export default function MovieCard({
  title,
  overview,
  movieId,
  watchList,
  watchListId,
  youtubeUrl,
  age,
  time,
  year,
}: iAppProps) {
  const [open, setOpen] = useState(false);
  const pathName = usePathname()
  return (
    <>
      <button onClick={() => setOpen(true)} className="-mt-14">
        <PlayCircle className="h-20 w-20" />
      </button>

      <div className="right-5 top-5 absolute z-10">
        {watchList ? (
          <form action={deleteFromWatchList}>
            <input type="hidden" name="watchlistId" value={watchListId} />
            <input type="hidden" name="pathname" value={pathName} />

            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4 text-red-500" />
            </Button>
          </form>
        ) : (
          <form action={addToWatchList}>
            <input type="hidden" name="movieId" value={movieId} />
            <input type="hidden" name="pathname" value={pathName} />
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
          </form>
        )}
      </div>
      <div className="p-5 absolute bottom-0 left-0">
        <h1 className="font-bold text-lg line-clamp-1">{title}</h1>
        <div className="flex gap-x-2 items-center">
          <p className="font-normal text-sm">{year}</p>
          <p className="font-normal text-sm border py-0.5 px-1 border-green-200 rounded">
            {age}+
          </p>
          <p className="font-normal text-sm">{time}h</p>
        </div>

        <p className="line-clamp-1 text-sm text-gray-200 font-light">
          {overview}
        </p>
      </div>
      <PlayVideoModal
        youtubeUrl={youtubeUrl}
        key={movieId}
        title={title}
        overview={overview}
        state={open}
        changeState={setOpen}
        age={age}
        duration={time}
        release={year}
      />
    </>
  );
}