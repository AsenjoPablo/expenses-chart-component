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
            <div className="rounded h-32 w-6 bg-primary-cyan"></div>
          ) : (
            <div
              className="rounded w-6 bg-primary-red"
              style={{ height: `${(day.amount / maxValue) * 100}%` }}
            ></div>
          )}
          <span className="text-xs opacity-60">{day.day}</span>
        </div>
      ))}
    </div>
  );
}
