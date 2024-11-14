"use client";

import { useState } from "react";
import Image from "next/image";
import { LockIcon } from "lucide-react";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  const sideClassName = `fixed flex flex-col h-[100%] shadow-xl transition-all 
    duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white w-64
  `

  return <div className={sideClassName}>
    <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-6 dark:bg-black">
      <div className="text-xl font-bold text-gray-800 dark:text-white">
        PMTL
      </div>
    </div>
    <div className="flex fitems-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
      <Image src="/logo.png" alt="Logo" width={40} height={40} />
      <div className="flex flex-col">
        <h3 className="text-md font-bold tracking-wide dark:text-gray-200">
            Project Management Tool
        </h3>
        <div className="mt-1 flex items-start gap-2">
          <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400" />
          <p className="text-xs font-medium tracking-wide text-gray-500 dark:text-gray-400">Private</p>
        </div>
      </div>
    </div>
  </div>;
};

export default Sidebar;
