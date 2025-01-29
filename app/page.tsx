"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

// Video data with IDs and start times
const videoData = [
  {
    id: "a1wW0AjQCI8",
    start: 26,
  },
  {
    id: "AZ_t9iAJRDw",
    start: 6,
  },
  {
    id: "vVQnJqgu6-U",
    start: 0,
  },
  {
    id: "wsHNUOgJJZU",
    start: 0,
  },
  {
    id: "Cuoop11CL74",
    start: 0,
  },
  {
    id: "RiZ2N3A5siI",
    start: 7,
  },
  {
    id: "lFD2eid8Ugw",
    start: 0,
  },
  {
    id: "Hy_BVgkKMRg",
    start: 70,
  },
  {
    id: "wzpfR_bkljM",
    start: 0,
  },
  {
    id: "qJ8BpSaTF5A",
    start: 0,
  },
  {
    id: "Mrax5_z07Y0",
    start: 192,
  },
  {
    id: "RMo3SR1G1yg",
    start: 210,
  },
  {
    id: "WT_tZuDUpn8",
    start: 99,
  },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
  // {
  //   id: "",
  //   start: 0,
  // },
];

export default function YouTubePage() {
  const [playVideos, setPlayVideos] = useState<boolean[]>(
    Array(53).fill(false)
  );
  const [showVideos, setShowVideos] = useState<boolean[]>(
    Array(53).fill(false)
  );

  const togglePlay = (index: number) => {
    setPlayVideos((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const toggleShow = (index: number) => {
    setShowVideos((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <div className="flex min-h-screen flex-wrap justify-center bg-gray-50 p-4">
      <div className=" text-center text-red-500">

      <p className=" text-6xl font-bold mb-10">กติกา</p>
       
      <ol className=" text-4xl mb-20">
        <li>1. ยกมือให้กรรมการชี้ จึงจะมีสิทธิตอบ</li>
        <li>2. เมื่อกรรมการชี้ ต้องตอบภายใน 5 วินาที</li>
        <li>3. ต้องตอบให้ถูกทั้งชื่อเพลง และศิลปิน</li>
      </ol>
      </div>
      {videoData.map((video, index) => {
        const videoUrl = playVideos[index]
          ? `https://www.youtube.com/embed/${video.id}?start=${video.start}&autoplay=1`
          : "";

        return (
          <Card
            key={index}
            className={cn(
              "m-4 w-full p-6 shadow-xl",
              index < 3 && " bg-yellow-100"
            )}
          >
            <h2 className="mb-4 text-xl font-bold">
              {index < 3 ? <>Example </> : <>YouTube Player {index - 2}</>}
            </h2>
            <div className="mb-4 flex justify-between">
              <Button
                onClick={() => togglePlay(index)}
                className={cn(
                  "rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700",
                  playVideos[index] && "bg-red-600 hover:bg-red-700"
                )}
              >
                {playVideos[index] ? "Pause Video" : "Play Video"}
              </Button>
              <Button
                onClick={() => toggleShow(index)}
                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                {showVideos[index] ? "Hide" : "Show"}
              </Button>
            </div>
            <CardContent
              className={cn(
                "relative h-64 w-full overflow-hidden rounded-2xl bg-black",
                showVideos[index] ? "visible" : "hidden"
              )}
            >
              {videoUrl ? (
                <motion.iframe
                  src={videoUrl}
                  title={`YouTube Video Player ${index + 1}`}
                  className="h-full w-full rounded-xl border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                ></motion.iframe>
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gray-800 text-white">
                  <p>Press Play to Start the Video</p>
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
