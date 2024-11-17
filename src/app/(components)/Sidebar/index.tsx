"use client";

import { useState } from "react";
import Image from "next/image";
import { LockIcon } from "lucide-react";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  const sideClassName = `fixed flex flex-col h-[100%] shadow-xl transition-all 
    duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white w-64`

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

        <nav className="z-10 w-full">
          <SidebarLink icon={Home} label="Home" href="/" isCollapsed={false}/>
        </nav>
      </div>
    </div>

  </div>;
};
interface SidebarLinkProps {
  href: string;
  icon: any;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname === "/" && href === "/dashboard");
  const screenWidth = window.innerWidth;

  const dispatch = useAppDispatch();
  // @ts-ignore
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);

  return (
    <Link href={href} className="w-full">
    <div className={`
    relative flex cursor-pointer items-center gap-3 transition-colors
    hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-black
    ${isActive ? "bg-gray-100 text-white dark:bg-gray-600" : ""}
    `}>
      {isActive && <div className="absolute left-0 top-0 h-[100%] w-[5px] bg-blue-200"/>}
      <Icon className="h-6 w-6 text-gray-800 dark:text-gray-100"/>
      <span className={`font-medium text-gray-800 dark:text-gray-100}`}>
        {label}
      </span>
    </div>
  </Link>)
}

export default Sidebar;
