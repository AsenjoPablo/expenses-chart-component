import React, { useEffect, useState } from "react";
import { DaySpending } from "../shared/types";

export default function SpendingGraph({ data }: { data: DaySpending[] }) {
  const [maxValue, setMaxValue] = useState<number>(0);

  useEffect(() => {
    setMaxValue(Math.max(...data.map((d) => d.amount)));
  }, [data]);

  return (
    <div className="flex gap-x-3 mt-12 justify-between">
      {data.map((day, index) => (
        <div
          className="flex flex-col gap-y-3 justify-end items-center"
          key={index}
        >
          {/* if value is max, different color and set height */}
          {day.amount === maxValue ? (
            <div className="rounded h-32 w-6 bg-primary-cyan hover:opacity-60 group relative duration-150">
              <div className="pointer-events-none opacity-0 group-hover:opacity-100 duration-150 absolute z-50 bottom-full">
                <span className="text-xs px-2 py-1 z-50 border-2 border-slate-300 rounded-lg bg-white">
                  ${day.amount}
                </span>
              </div>
            </div>
          ) : (
            <div
              className="rounded w-6 bg-primary-red group relative duration-150"
              style={{ height: `${(day.amount / maxValue) * 100}%` }}
            >
              <div className="pointer-events-none opacity-0 group-hover:opacity-100 duration-150 bottom-full z-50 absolute">
                <span className="text-xs px-2 py-1 z-50 border-2 border-slate-300 rounded-lg bg-white">
                  ${day.amount}
                </span>
              </div>
            </div>
          )}
          <span className="text-xs opacity-60">{day.day}</span>
        </div>
      ))}
    </div>
  );
}
