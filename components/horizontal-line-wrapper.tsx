import React from "react";

function HorizontalLineWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative before:absolute before:top-0 before:-right-[100vw] before:h-px before:w-[200vw] before:bg-gray-400/20 after:absolute after:-right-[100vw] after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-400/20">
      <div className="py-2 sm:p-2">{children}</div>
    </div>
  );
}

export default HorizontalLineWrapper;
