"use client"; // This is a client component 👈🏽

import React, { useEffect, useState } from "react";
type Props = {};

const TopLabel = (props: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  console.log('%cMyProject%cline:7%cisScrolled', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(38, 157, 128);padding:3px;border-radius:2px', isScrolled)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div className="fixed w-full">
        <div className="bg-[#F3F3FB] border p-3 text-center text-sm w-full">
          Consumer Advisory: APR Rates Range From 5.99% to 35.99% Maximum APR
          for qualified consumers.
        </div>
        <div
          className={` ${
            isScrolled ? "opacity-100" : "opacity-0"
          } border bg-white text-center p-3 font-semibold transition-all`}
        >
          CashLoansExpress.com
        </div>
      </div>
    </div>
  );
};

export default TopLabel;
