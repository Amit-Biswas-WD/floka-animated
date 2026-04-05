"use client";

const awards = [
  { title: "BEST DESIGNER AWARDS", organization: "AWWWARDS", year: "2025" },
  { title: "PEAKY UI DESIGNER", organization: "GOOGLE", year: "2024" },
  { title: "GREAT IN UX", organization: "APPLE", year: "2023" },
  { title: "BEST WEBSITE PICK", organization: "MICROSOFT", year: "2022" },
  { title: "NELSON UI & UX DESIGNER", organization: "SAMSUNG", year: "2021" },
];

const AwardList = () => {
  return (
    <div className="mt-20">
      <div className="border-t border-gray-400"></div>

      {awards.map((award, index) => (
        <div
          key={index}
          className="
            relative overflow-hidden
            border-b border-gray-400 
            group cursor-pointer 
            transition-colors duration-500
            hover:bg-white
          "
        >
          <div className="flex items-center justify-between py-7 px-0 transition-all duration-500 ease-in-out group-hover:px-12 group-hover:scale-[0.95]">
            <div className="w-1/3">
              <h3 className="text-base font-normal text-[#0A0A0A] uppercase tracking-tight">
                {award.title}
              </h3>
            </div>
            <div className="w-1/3 text-center">
              <span className="text-base font-normal text-[#0A0A0A] uppercase tracking-widest">
                {award.organization}
              </span>
            </div>
            <div className="w-1/3 text-right">
              <span className="text-base font-normal text-[#0A0A0A] uppercase tracking-widest">
                {award.year}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AwardList;
