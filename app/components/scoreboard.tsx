"use client";

import { useState } from "react";

export default function Scoreboard() {
  const [scores, setScores] = useState<{ [key: string]: number }>(
    Object.fromEntries(Array.from({ length: 5 }, (_, i) => [`Team ${i + 1}`, 0]))
  );

  const updateScore = (team: string, delta: number) => {
    setScores((prev) => ({
      ...prev,
      [team]: prev[team] + delta,
    }));
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white border shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Scoreboard</h1>
      <div className="space-y-4">
        {Object.entries(scores).map(([team, score]) => (
          <div key={team} className="flex flex-row items-center gap-4 border p-4 rounded-md">
            <span className="text-lg font-semibold w-24">{team}</span>
            <button
              onClick={() => updateScore(team, -3)}
              className="px-3 py-1 bg-red-500 text-white rounded-md"
            >
              -
            </button>
            <span className="text-3xl font-mono w-12 text-center">{score}</span>
            <button
              onClick={() => updateScore(team, 1)}
              className="px-3 py-1 bg-green-500 text-white rounded-md"
            >
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
