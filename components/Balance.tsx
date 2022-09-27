import React from "react";

export default function Balance({ value }: { value: number }) {
  return (
    <div className="bg-primary-red text-white rounded-lg p-4 flex justify-between items-center">
      <div className="flex flex-col gap-y-1">
        <span className="text-xs opacity-60">My balance</span>
        <span className="font-bold">${value}</span>
      </div>

      <svg
        width="48"
        height="24"
        viewBox="0 0 72 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fillRule="evenodd">
          <circle fill="#382314" cx="48" cy="24" r="24" />
          <circle stroke="#FFF" strokeWidth="2" cx="24" cy="24" r="23" />
        </g>
      </svg>
    </div>
  );
}
