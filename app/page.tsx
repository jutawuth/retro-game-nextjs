"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import Timer from "./components/timer";
import CountDownTimer from "./components/countdown-timer";
import Scoreboard from "./components/scoreboard";

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
    id: "19UjyhKY7eA",
    start: 3,
  },
  {
    no: "3",
    id: "RiZ2N3A5siI",
    start: 7,
  },
  {
    no: "4",
    id: "8k6C_3Q4S1o",
    start: 10,
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
    id: "ScRCef7kXGg",
    start: 0,
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
  {
    no: "31",
    id: "I8PeN_wEs3w",
    start: 10,
  },
  {
    no: "32",
    id: "VtEOxczidvE",
    start: 7,
  },
  {
    no: "33",
    id: "xfLmv1TsBRw",
    start: 60,
  },
  {
    no: "34",
    id: "yZsroWSE3_E",
    start: 80,
  },
  {
    no: "35",
    id: "UvMA0_G6A3g",
    start: 63,
  },
  {
    no: "36",
    id: "ltewjOTLhl8",
    start: 80,
  },
  {
    no: "37",
    id: "pAfCri2iqsY",
    start: 63,
  },
  {
    no: "38",
    id: "df23gNFCprw",
    start: 110,
  },
  {
    no: "39",
    id: "1sl1PxeU_wk",
    start: 96,
  },
  {
    no: "40",
    id: "RIFBoS04ETk",
    start: 131,
  },
  {
    no: "41",
    id: "qguo-j5PxBE",
    start: 4,
  },
  {
    no: "42",
    id: "TntfD-GpPd4",
    start: 67,
  },
  {
    no: "43",
    id: "6f5sozKp0R0",
    start: 0,
  },
  {
    no: "44",
    id: "UYVqeYjFidY",
    start: 4,
  },
  {
    no: "45",
    id: "nY9sHiZ4bTU",
    start: 0,
  },
  {
    no: "46",
    id: "fmAEiuuoc_0",
    start: 8,
  },
  {
    no: "47",
    id: "lFD2eid8Ugw",
    start: 73,
  },
  {
    no: "48",
    id: "TMr6subvuQI",
    start: 61,
  },
  {
    no: "49",
    id: "XJRkTyvoL4k",
    start: 116,
  },
  {
    no: "50",
    id: "ENnGPkhVu2g",
    start: 105,
  },
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
    // }, 15000);
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
      <div className="  flex  min-h-screen flex-wrap justify-center  p-4">
        <div className=" w-full text-center text-red-500">
          <p className=" text-6xl font-bold mb-10">กติกา</p>

          <ol className=" text-4xl mb-20 text-left">
            <li>1. ยกมือให้ กรรมการให้สัญญาณ จึงจะมีสิทธิตอบ</li>
            <li>2. ต้องตอบภายใน 5 วินาที</li>
            <li>3. ต้องตอบชื่อเพลงให้ถูกต้อง</li>
            <li>4. ตอบถูกได้ <u>1 คะแนน</u> และได้เลือกเพลงข้อถัดไป</li>
            <li>
              5. ตอบผิด หรือตอบไม่ทัน <u>-3 คะแนน</u> { " "}
              และทุกคนในทีมจะหมดสิทธิตอบในข้อนั้นๆ
            </li>
            <li>
              6. แต่ละข้อเล่นเพลง ประมาณ 10 วินาที หากไม่มีทีไหนยกมือ
              จะข้่ามไปเพลงถัดไป
            </li>
            <li>7. จบเกมเมื่อเวลาหมด ทีมไหนคะแนนสูงสุด จะเป็นผู้ชนะ</li>
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
                "m-4 w-[400px] p-6 shadow-xl",
                index < 3 && " bg-yellow-100"
              )}
            >
              <h2 className="mb-4 text-xl font-bold">
                {index < 3 ? <>Example </> : <> {index - 2}</>}
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
                {playVideos[index] && <CountDownTimer />}

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
        <div className=" m-6 flex flex-row justify-end sticky top-6 right-0">
          <Timer />
        </div>

        <div className=" m-6 flex flex-row justify-end sticky top-56 right-0">
          <Scoreboard />
        </div>
      </div>
    </div>
  );
}
