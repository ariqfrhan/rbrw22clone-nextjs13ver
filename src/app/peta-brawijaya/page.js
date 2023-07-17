"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import dataMap from "../../constants/dataMap";
import DropdownMap from "@/components/DropdownMap/DropdownMap";
import Heading from "@/components/Heading/Heading";
import Image from "next/image";

export const metadata = {
  title: "Raja Brawijaya 2023 | Peta Brawijaya",
};

export default function page() {
  const getSelectData = (p) => {
    return dataMap.filter((e) => {
      return e.id == p;
    })[0];
  };

  const [active, setActive] = useState(false);
  const [select, setSelect] = useState(1);
  return (
    <div>
      <Head>
        <title>RAJA Brawijaya 2023</title>
      </Head>
      <div className="bg-white min-h-screen relative">
        <div className="container mx-auto py-24 relative z-3">
          <Heading top="Peta" bottom="Brawijaya" direction="center"></Heading>

          <div className="w-full mt-10 bg-green h-fit p-6 rounded-lg flex flex-col md:flex-row">
            <div className="w-4/5 mx-auto relative aspect-square select-none mb-10 md:full">
              <Image
                src={`/assets/images/map.png`}
                layout="responsive"
                width={1}
                height={1}
              ></Image>
            </div>
            <div className="md:w-3/5">
              <button
                className="bg-yellow rounded-lg relative text-sm hover:bg-yellow w-full py-3 px-4 font-poppins text-white"
                onClick={() => {
                  setActive(!active);
                }}
              >
                <div className="flex justify-between items-center w-full normal-case">
                    <p className="text-start">{`${getSelectData(select).id}.${getSelectData(select).nama}`}</p>
                    <img src="/assets/icons/arrdown.svg"></img>
                </div>
              </button>
              <DropdownMap
              active={active}
              setActive={setActive}
              data = {dataMap}
              select={e =>{
                setSelect(e);
              }}
              >
              </DropdownMap>
              <p className="text-white mt-4 font-poppins">
                {getSelectData(select).deskripsi}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
