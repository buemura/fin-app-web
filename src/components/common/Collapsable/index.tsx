import { useState } from "react";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";

interface CollapsableProps {
  title: string;
  children: React.ReactNode;
}

export function Collapsable({ title, children }: CollapsableProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleChangeCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className="flex flex-col justify-center bg-white m-2 p-4 rounded-lg md:mx-28 lg:mx-64">
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-2 text-lg font-semibold">
          {title}
        </span>

        {isCollapsed ? (
          <SlArrowRight
            className="cursor-pointer"
            onClick={handleChangeCollapse}
          />
        ) : (
          <SlArrowDown
            className="cursor-pointer"
            onClick={handleChangeCollapse}
          />
        )}
      </div>

      {isCollapsed && <>{children}</>}
    </div>
  );
}
