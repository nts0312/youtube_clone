import React, { useContext } from "react";
import { Context } from "../context/contextApi";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";

function LeftNav() {
  const { selectedCategory, setSelectedCategory, mobileMenu } =
    useContext(Context);

  return (
    <div className="md:block w-[240px] overflow-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240] md:translate-x-0 transition-all">
      <div className="flex px-5 flex-col">
        {categories.map((item, index) => {
          console.log(index);
          return (
            <>
              <LeftNavMenuItem
                key={index}
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {}}
                className={`${
                  selectedCategory === item.name ? "bg-white/[0.15]" : ""
                }`}
              />

              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </>
          );
        })}

        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">Cloned By NTS</div>
      </div>
    </div>
  );
}

export default LeftNav;
