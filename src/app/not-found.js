import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Pattern} from '../constants/Images'

export const metadata = {
  title: "RAJA Brawijaya 2023 | 404",
  keywords:
    "raja brawijaya, rajabrawijaya, ospek ub, ospek ub 2023, raja brawijaya 2023, rabraw 2023",
  author: "PIT RAJA Brawijaya",
  description:
    "RAJA Brawijaya adalah singkatan dari Rangkaian Acara Jelajah Almamater Universitas Brawijaya, merupakan serangkaian kegiatan yang bertujuan untuk memfasilitasi mahasiswa baru Universitas Brawijaya untuk mengetahui hal-hal terkait dengan kehidupan kampus, termasuk di dalamnya Pengenalan Kehidupan Kampus Mahasiswa Baru (PK2MB), Open House Lembaga Kedaulatan Mahasiswa dalam (OH).",
  openGraph: {
    title: "RAJA Brawijaya 2023",
    image: "https://rajabrawijaya.ub.ac.id/assets/favicon.ico",
    url: "https://rajabrawijaya.ub.ac.id",
  },
};

export default function Custom404() {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center container">
      <div
        className="w-full h-full absolute overflow-hidden opacity-10 drop-shadow-md"
        style={{
          backgroundImage: `url(/assets/images/CandiHijau.png)`,
        }}
      ></div>
      <div className="space-y-2">
        <div className="w-full md:w-[50vw] h-full mx-auto">
          <Image
            src={Pattern.HeadingFull}
            layout="responsive"
            objectFit="cover"
            alt="RAJA"
          ></Image>
        </div>
        <div className="drop-shadow-md">
          <h2 className="text-secondary font-agrandir font-extrabold text-6xl md:text-8xl text-center">
            404
          </h2>
          <h2 className="text-seconday font-agrandir font-extrabold text-base md:text-2xl text-center">
            Emangnya perasaan kamu doang yang bisa error? Page RAJA Brawijaya
            juga bisa error. Cek lagi di lain kesempatan ya! balik ke{" "}
            <Link href="/">
              <span className="!text-primary underline cursor-pointer">
                landing page
              </span>
            </Link>
          </h2>
        </div>
        <div className="w-full md:w-[50vw] h-full mx-auto rotate-180 drop-shadow-md">
        <Image
            src={Pattern.HeadingFull}
            layout="responsive"
            objectFit="cover"
            alt="RAJA"
          ></Image>
        </div>
      </div>
    </div>
  )
}
