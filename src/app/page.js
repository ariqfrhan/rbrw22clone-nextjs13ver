import Image from 'next/image'
import Script from 'next/script'
import Head from 'next/head'
import Jumbotron from '@/layout/Jumbotron/Jumbotron'
import Perkenalan from '@/layout/Perkenalan/Perkenalan'
import AddicitaBox from '@/layout/AdicittaBox/AddicitaBox'
import Logo from '@/layout/Logo/Logo'
import Sekilas from '@/layout/Sekilas/Sekilas'
import Rangkaian from '@/layout/Rangkaian/Rangkaian'
import Pkmaba from '@/layout/PkMaba/PkMaba'

export const metadata = {
  title: "RAJA Brawijaya 2023",
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

export default function Home() {
  return (
    <>
      <Jumbotron></Jumbotron>
      <Perkenalan></Perkenalan>
      <AddicitaBox></AddicitaBox>
      <Logo></Logo>
      <Sekilas></Sekilas>
      <Rangkaian></Rangkaian>
      <Pkmaba></Pkmaba>
    </>
  )
}
