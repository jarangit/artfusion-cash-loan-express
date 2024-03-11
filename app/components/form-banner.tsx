"use client"; // This is a client component 👈🏽

import React, { useEffect, useRef, useState } from "react";
import Column from "./column";
import Row from "./row";
import { MdOutlineCode } from "react-icons/md";
import ButtonGetStart from "./button-get-start";

type Props = {};

const priceList = [200, 1500, 3000];

const FormBanner = (props: Props) => {
  const [value, setValue] = useState(1500); // กำหนดค่าเริ่มต้นเป็น 50
  const iconDotRef = useRef(null);
  const [currentRange, setCurrentRange] = useState("100");

  const handleChange = (e: any) => {
    setValue(e.target.value);
    const value = e.target.value;
    const iconDot = iconDotRef.current;
    const rangeWidth = e.target.clientWidth;
    const offset = (value / e.target.max) * rangeWidth - 20;

    setCurrentRange(offset.toString());
  };

  useEffect(() => {
    const iconDot: any = iconDotRef.current;
  }, []);

  return (
    <div className="bg-white rounded-lg  w-[350px] lg:w-[400px] mx-auto p-6 text-black">
      <Column gap={6}>
        <p className=" text-black font-medium text-3xl">${value}</p>
        <input
          type="range"
          min="0"
          max="3000"
          value={value}
          onChange={handleChange}
          className="rangeInput"
          id="input-range"
        />

        <Row className="justify-between">
          {priceList.map((item, key) => (
            <div key={key}>${item}</div>
          ))}
        </Row>

        <div>
          <ButtonGetStart />
        </div>

        <Column className="text-sm">
          <div>{`Apply now and get a 
decision within minutes`}</div>
          <div>{`decision within minutes`}</div>
        </Column>
      </Column>
    </div>
  );
};

export default FormBanner;
