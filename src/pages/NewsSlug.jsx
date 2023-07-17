'use client'
import React,{useEffect,useState} from 'react'
import Head from 'next/head'
import { useRouter, useParams } from 'next/navigation'
import NewsCardMini from '../components/NewsCard/NewsCardMini'
import NewsDetail from '../components/NewsCard/NewsDetail'
import {apiNews, apiNewsOnce} from '../lib/api';
import Heading from '../components/Heading/Heading'
import Swiper, {SwiperSlide} from 'swiper'


export default function slugNews() {
    const router = useRouter();
    const [newsDetail, setNewsDetail] = useState([]);
    const [newsOthers, setNewsOthers] = useState([]);
    const[loading,setLoading] = useState(true);
    const {slug} = useParams();

    useEffect(() =>{
      apiNewsOnce(slug)
      .then(res =>{
        if (res.data) {
          setNewsDetail(res.data);
        }else{
          router.push('/404')
        }
      })
      .catch(err =>{
        setLoading(false);
      })
      apiNews()
        .then(res => {
          setNewsOthers(res.data);
        })
        .catch(err=>{})
        .finally(() =>{
          setLoading(false);
        })
    },[slug])

    console.log(newsDetail);
    console.log(newsOthers)

    const date = date => {
      const dateSplit = date.split("-");
      const year = dateSplit[0];
      const month = dateSplit[1];
      let day = dateSplit[2];
      day = day.split("T")[0];
      return `${day}-${month}-${year}`;
    };

  return (
    <>
      <Head>
        <title>RAJA Brawijaya 2023 | Arkana Info</title>
      </Head>

      <div className='after:candiHijau relative pt-24 pb-20' id='blog'>
        <div className='container pt-20'>
          <div className='flex lg:flex-row flex-col'>
            <NewsDetail
              title={newsDetail.title}
              thumbnail={newsDetail.thumbnail}
              description={newsDetail.description}
            >
            </NewsDetail>
          </div>
        </div>
        <div className='container pt-20'>
          <Heading
            top='Lihat'
            bottom='Lainnya'
          ></Heading>
          <div className='flex md:flex-row flex-col md:space-x-5 h-full items-center pt-5'>
            <div className='flex-1 md:space-y-2 items-between justify-between flex'>
              {newsOthers.map((item,index) =>{
                if (index<3) {
                  return(
                    <div className='md:w-1/3 md:h-1/3'>
                      <NewsCardMini
                        title={item.title}
                        description={item.description}
                        thumbnail={item.thumbnail}
                        slug={item.slug}
                        date={date(item.created_at)}
                      ></NewsCardMini>
                    </div>
                  )
                }
              })}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
