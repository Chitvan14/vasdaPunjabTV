import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  description?: string;
  color: "black" | "red";
}

const Header = ({ title = "", color = "black", description = "" }: Props) => {
  return (
    <header className="border-y-2 border-gray-200 mb-1 py-2 w-4/5">
      <div
        className={`text-2xl ${
          color == "black" ? "text-black" : "text-red-500"
        }`}
      >
        {title}
      </div>
      {description && (
        <div className="text-xs text-gray-500">{description}</div>
      )}
    </header>
  );
};

export default Header;
