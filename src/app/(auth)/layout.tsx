import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full h-screen bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
      <div className="flex items-center justify-center relative h-screen w-full">
        {children}
      </div>
    </div>
  );
};

export default layout;
