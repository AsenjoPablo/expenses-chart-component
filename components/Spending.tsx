import React from "react";
import { Spending as SpendingType } from "../shared/types";
import SpendingGraph from "./SpendingGraph";

export default function Spending({ spending }: { spending: SpendingType }) {
  return (
    <div className="bg-white p-5 rounded-lg">
      <div className="flex flex-col">
        <h2 className="font-bold text-xl">Spending - Last 7 days</h2>
        <SpendingGraph data={spending.last7Days} />
        <hr className="my-4 border-t border-cream" />

        <h3 className="text-xs opacity-60">Total this month</h3>
        <div className="flex justify-between items-center my-1">
          <span className="font-bold text-2xl">${spending.monthTotal}</span>
          <div className="flex flex-col items-end">
            <span className="font-bold text-sm">
              {spending.hasIncremented ? "+" : "-"}
              {spending.lastMonthIncrement}%
            </span>
            <span className="text-xs opacity-60">from last month</span>
          </div>
        </div>
      </div>
    </div>
  );
}
