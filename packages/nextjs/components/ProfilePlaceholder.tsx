import React from "react";
import { IoPersonOutline } from "react-icons/io5";

interface Props {
  showName?: boolean;
}
export default function ProfilePlaceholder({ showName }: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full aspect-square rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-white text-3xl">
        <IoPersonOutline />
      </div>

      {showName && <text className="text-gray-300 font-bold">--</text>}
    </div>
  );
}
