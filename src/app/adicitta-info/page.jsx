"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { apiNews } from "@/lib/api";
import { Pattern } from "../../constants/Images";
import NewsCard from "../../components/NewsCard/NewsCard";
import NewsCardMini from "../../components/NewsCard/NewsCardMini";
import LoadingPage from '../../components/LoadingPage'
import Head from "next/head";

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

export default function page() {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  useEffect(() => {
    apiNews()
      .then((res) => {
        setNews(res.data);
      })
      .catch((err) => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // date form database to indonesia format
  const date = (date) => {
    const dateSplit = date.split("-");
    const year = dateSplit[0];
    const month = dateSplit[1];
    let day = dateSplit[2];
    day = day.split("T")[0];
    return `${day}-${month}-${year}`;
  };
  console.log(news[0]);

  return (
    <>
      {news.length === 0 ? (
        <LoadingPage />
      ) : (
        <>
          <Head>
            <title>RAJA Brawijaya 2023 | Adicitta Info</title>
          </Head>

          <div className="after:candiHijau min-h-screen relative pt-24 pb-20">
            <div>
              <div className="md:w-[50vw] h-full mx-4 md:mx-auto drop-shadow-md">
                <Image
                  src={Pattern.HeadingFull}
                  layout="responsive"
                  objectFit="cover"
                  alt="RAJA Brawijaya"
                />
              </div>
              <h1 className="text-center py-2 text-blue font-agrandir font-bold  text-3xl lg:text-[4rem] md:text-5xl">
                Adicitta <span className="text-orange">Info</span>
              </h1>
              <div className="rotate-180 mx-4 md:w-[50vw] h-full md:mx-auto">
                <Image
                  src={Pattern.HeadingFull}
                  layout="responsive"
                  objectFit="cover"
                  alt="RAJA Brawijaya"
                />
              </div>
              <div className="container pt-20 ">
                {/* <HeadingMini top={"News"} bottom=" Baru" /> */}
                <div className="flex lg:flex-row flex-col  lg:space-x-5 h-full items-center pt-5 ">
                  <div className="lg:w-1/2 basis-1/2  h-full ">
                    {news.length > 0 && (
                      <NewsCard
                        title={news[0].title}
                        description={news[0].summary}
                        thumbnail={news[0].thumbnail}
                        slug={news[0].slug}
                        date={date(news[0].created_at)}
                      />
                    )}
                  </div>
                  <div className="flex-1 basis-1/2 md:space-y-2 items-between ">
                    <div className="flex flex-1 md:space-x-5 md:flex-row flex-col ">
                      {news.map((item, index) => {
                        if (index > 0 && index < 3) {
                          return (
                            <div className="md:w-1/2 md:h-1/2">
                              <NewsCardMini
                                title={item.title}
                                description={item.summary}
                                thumbnail={item.thumbnail}
                                slug={item.slug}
                                date={date(item.created_at)}
                              />
                            </div>
                          );
                        }
                      })}
                    </div>
                    <div className="flex flex-1 md:space-x-5 md:flex-row flex-col ">
                      {news.map((item, index) => {
                        if (index > 2 && index < 5) {
                          return (
                            <div className="md:w-1/2 md:h-1/2">
                              <NewsCardMini
                                title={item.title}
                                description={item.summary}
                                thumbnail={item.thumbnail}
                                slug={item.slug}
                                date={date(item.created_at)}
                              />
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
              </div>
              {news.length > 5 && (
                <div className="container">
                  {/* <HeadingMini top={"News"} bottom=" Lama" /> */}
                  <div className="flex md:flex-row flex-col  md:space-x-5 h-full items-center pt-5 ">
                    <div className="flex-1  md:space-y-2 items-between  justify-between ">
                      <div
                        className={`flex flex-1 md:flex-row flex-col ${
                          news % 3 == 0 ? "justify-between" : "justify-start"
                        }  flex-wrap`}
                      >
                        {news.map((item, index) => {
                          if (index > 4) {
                            return (
                              <div className="sm:w-1/3">
                                <NewsCardMini
                                  title={item.title}
                                  description={item.summary}
                                  thumbnail={item.thumbnail}
                                  slug={item.slug}
                                  date={date(item.created_at)}
                                  item={item}
                                />
                              </div>
                            );
                          }
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
