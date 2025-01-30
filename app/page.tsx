"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import Timer from "./components/timer";
import CountDownTimer from "./components/countdown-timer";

// Video data with IDs and start times
const videoData = [
  {
    no: "ex1",
    id: "a1wW0AjQCI8",
    start: 26,
  },
  {
    no: "ex2",
    id: "AZ_t9iAJRDw",
    start: 6,
  },
  {
    no: "ex3",
    id: "vVQnJqgu6-U",
    start: 0,
  },
  { no: "1", id: "Cuoop11CL74", start: 0 },
  {
    no: "2",
    id: "wsHNUOgJJZU",
    start: 0,
  },
  {
    no: "3",
    id: "RiZ2N3A5siI",
    start: 7,
  },
  {
    no: "4",
    id: "lFD2eid8Ugw",
    start: 0,
  },
  {
    no: "5",
    id: "Hy_BVgkKMRg",
    start: 70,
  },
  {
    no: "6",
    id: "wzpfR_bkljM",
    start: 0,
  },
  {
    no: "7",
    id: "qJ8BpSaTF5A",
    start: 0,
  },
  {
    no: "8",
    id: "Mrax5_z07Y0",
    start: 192,
  },
  {
    no: "9",
    id: "0iuKt11wfic",
    start: 2,
  },
  {
    no: "10",
    id: "WT_tZuDUpn8",
    start: 99,
  },
  {
    no: "11",
    id: "Jd4Hd-HFgls",
    start: 22,
  },
  {
    no: "12",
    id: "TSsfTJ5OxTo",
    start: 121,
  },
  {
    no: "13",
    id: "RMo3SR1G1yg",
    start: 210,
  },
  {
    no: "14",
    id: "7ot0J1ROxxs",
    start: 6,
  },
  {
    no: "15",
    id: "S4k4nvTPjYI",
    start: 20,
  },
  {
    no: "16",
    id: "hm7OVC2MQDg",
    start: 80,
  },
  {
    no: "17",
    id: "3Wkmu-O7PA8",
    start: 11,
  },
  {
    no: "18",
    id: "UJjWqoV3pes",
    start: 11,
  },
  {
    no: "19",
    id: "CSnIH3MtVpQ",
    start: 11,
  },
  {
    no: "20",
    id: "8rMGIqCIjkc",
    start: 46,
  },
  {
    no: "21",
    id: "UZxDLz-li_c",
    start: 71,
  },
  {
    no: "22",
    id: "CKDwsFbq1_c",
    start: 2,
  },
  {
    no: "23",
    id: "DFEVA5-INzM",
    start: 118,
  },
  {
    no: "24",
    id: "roughtzsCDI",
    start: 90,
  },
  {
    no: "25",
    id: "tn7_CFkr6Oo",
    start: 0,
  },
  {
    no: "26",
    id: "GibiNy4d4gc",
    start: 0,
  },
  {
    no: "27",
    id: "jdiRSOkzQns",
    start: 15,
  },
  {
    no: "28",
    id: "ApXoWvfEYVU",
    start: 4,
  },
  {
    no: "29",
    id: "kJQP7kiw5Fk",
    start: 29,
  },
  {
    no: "30",
    id: "R0n4T0SQt70",
    start: 2,
  },
  // {
  //   no: "31",
  //   id: "",
  //   start: 0,
  // },
  // {
  //   no: "32",
  //   id: "",
  //   start: 0,
  // },
  // {
  //   no: "33",
  //   id: "",
  //   start: 0,
  // },
  // {
  //   no: "34",
  //   id: "",
  //   start: 0,
  // },
  // {
  //   no: "35",
  //   id: "",
  //   start: 0,
  // },
  // {
  //   no: "36",
  //   id: "",
  //   start: 0,
  // },
  // {
  //   no: "37",
  //   id: "",
  //   start: 0,
  // },
  // {
  //   no: "38",
  //   id: "",
  //   start: 0,
  // },
  // {
  //   no: "39",
  //   id: "",
  //   start: 0,
  // },
  // {
  //   no: "40",
  //   id: "",
  //   start: 0,
  // },
  // {
  //   no: "41",
  //   id: "",
  //   start: 0,
  // },
  // {
  //   no: "42",
  //   id: "",
  //   start: 0,
  // },
  // {
  //   no: "43",
  //   id: "",
  //   start: 0,
  // },
  // {
  //   no: "44",
  //   id: "",
  //   start: 0,
  // },
  // {
  //   no: "45",
  //   id: "",
  //   start: 0,
  // },
  // {
  //   no: "46",
  //   id: "",
  //   start: 0,
  // },
  // {
  //   no: "47",
  //   id: "",
  //   start: 0,
  // },
  // {
  //   no: "48",
  //   id: "",
  //   start: 0,
  // },
  // {
  //   no: "49",
  //   id: "",
  //   start: 0,
  // },
  // {
  //   no: "50",
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

    // setTimeout(() => {
    //   setPlayVideos((prev) => {
    //     const updated = [...prev];
    //     updated[index] = !updated[index];
    //     return updated;
    //   });
    // }, 10000);
  };

  const toggleShow = (index: number) => {
    setShowVideos((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <div className=" flex flex-row ">
      <div className=" container flex min-h-screen flex-wrap justify-center  p-4">
        <div className=" text-center text-red-500">
          <p className=" text-6xl font-bold mb-10">กติกา</p>

          <ol className=" text-4xl mb-20">
            <li>1. ยกมือให้กรรมการชี้ จึงจะมีสิทธิตอบ</li>
            <li>2. เมื่อกรรมการชี้ ต้องตอบภายใน 5 วินาที</li>
            <li>3. ต้องตอบให้ถูกทั้งชื่อเพลง และศิลปิน</li>
            <li>4. ตอบได้ 1 คะแนน ตอบผิด หรือตอบไม่ทัน -3 คะแนน</li>
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
                  {playVideos[index] ? "Stop Video" : "Play Video"}
                </Button>
                {/* {playVideos[index] && <CountDownTimer />} */}

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
      <div>
        <div className=" m-6 flex flex-row justify-end sticky top-0 right-0">
          <Timer />
        </div>
      </div>
    </div>
  );
}
