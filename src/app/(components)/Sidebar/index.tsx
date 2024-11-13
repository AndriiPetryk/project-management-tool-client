"use client";

import { useState } from "react";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  const sideClassName = `fixed flex flex-col h-[100%] justify-between shadow-xl transition-all 
    duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white w-64
  `

  return <div className={sideClassName}>
    <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-6 dark:bg-black">
      <div className="text-xl font-bold text-gray-800 dark:text-white">
        PMTL
      </div>
    </div>

  </div>;
};

export default Sidebar;
