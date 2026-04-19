"use client";
import { Moon, Sun } from "@gravity-ui/icons";
import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

//    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
//     className={`rounded-full py-2 px-3 font-semibold  ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"}`}>
//        {theme === "dark" ? "Light" : "Dark"} 
//     </button>
  return (
    <Switch onChange={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {({isSelected}) => (
        <>
          <Switch.Control
            className={`h-[31px] w-[51px] bg-black ${isSelected ? "bg-white shadow-[0_0_12px_rgba(6,182,212,0.5)]" : ""}`}
          >
            <Switch.Thumb
              className={`size-[27px]  shadow-sm ${isSelected ? "ms-[22px] shadow-lg bg-black" : "bg-white"}`}
            >
              <Switch.Icon>
                {isSelected ? (
                  <Sun className="size-4 text-white" />
                ) : (
                  <Moon className="size-4 text-black" />
                )}
              </Switch.Icon>
            </Switch.Thumb>
          </Switch.Control>
        </>
      )}
    </Switch>
  );
};

export default ThemeSwitch;
