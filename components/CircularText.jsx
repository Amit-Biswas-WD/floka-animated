import React from "react";
import { HiOutlineTrophy } from "react-icons/hi2";

const CircularText = () => {
  const text = "PLAYFUL, LUXURIOUS, OR MORE / WANT IT TO SOUND ";
  const characters = text.split("");
  const degreeStep = 360 / characters.length;

  return (
    <div className="flex items-center justify-center mb-10">
      {/* Container size reduced from w-64 to w-32 (50% smaller) */}
      <div className="relative flex items-center justify-center w-32 h-32">
        {/* Icon size reduced accordingly */}
        <div className="text-[#dedede] text-3xl">
          <HiOutlineTrophy />
        </div>

        {/* Rotating Text */}
        <div className="absolute inset-0 animate-spin-slow">
          {characters.map((char, i) => (
            <span
              key={i}
              // Origin is now 64px (half of 128px/w-32)
              className="absolute left-1/2 top-0 origin-[0_64px] text-[10px] font-bold uppercase tracking-tighter text-[#dedede]"
              style={{
                transform: `rotate(${i * degreeStep}deg)`,
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CircularText;
