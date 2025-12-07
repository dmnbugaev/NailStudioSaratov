export function DecorativePattern({ position = "top" }: { position?: "top" | "bottom" }) {
  return (
    <div 
      className={`w-full h-2 flex items-center justify-center gap-1 ${
        position === "bottom" ? "mt-8" : "mb-8"
      }`}
    >
      {/* Russian folk-inspired pattern */}
      <div className="flex items-center gap-1">
        <div className="w-3 h-3 rotate-45 border-2 border-[#570228]"></div>
        <div className="w-16 h-[2px] bg-[#570228]"></div>
        <div className="w-2 h-2 rounded-full bg-[#FA9EBC]"></div>
        <div className="w-4 h-4 border-2 border-[#FA9EBC] rounded-full"></div>
        <div className="w-2 h-2 rounded-full bg-[#FA9EBC]"></div>
        <div className="w-16 h-[2px] bg-[#570228]"></div>
        <div className="w-3 h-3 rotate-45 border-2 border-[#570228]"></div>
      </div>
    </div>
  );
}

export function FolkFlower({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Russian folk-style flower pattern */}
      <circle cx="50" cy="50" r="8" fill="#570228" />
      <circle cx="50" cy="30" r="10" fill="#FA9EBC" opacity="0.6" />
      <circle cx="70" cy="50" r="10" fill="#FA9EBC" opacity="0.6" />
      <circle cx="50" cy="70" r="10" fill="#FA9EBC" opacity="0.6" />
      <circle cx="30" cy="50" r="10" fill="#FA9EBC" opacity="0.6" />
      <circle cx="35" cy="35" r="7" fill="#FFDBD1" opacity="0.8" />
      <circle cx="65" cy="35" r="7" fill="#FFDBD1" opacity="0.8" />
      <circle cx="65" cy="65" r="7" fill="#FFDBD1" opacity="0.8" />
      <circle cx="35" cy="65" r="7" fill="#FFDBD1" opacity="0.8" />
    </svg>
  );
}
