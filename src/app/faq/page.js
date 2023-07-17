"use client";
import React, { useState, useEffect } from "react";
import { apiFaq } from "@/lib/api";
import loading from "@/components/LoadingPage";
import GroupFaq from "../../components/faq/GroupFaq";
import DropFaq from '../../components/faq/DropFaq'

const questData = [
  {
    id: "umumA",
    id_category: "umum",
    quest: "Lorem ipsum dolor sit amet. quest umumA",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nulla! answer umumA",
  },
  {
    id: "umumB",
    id_category: "umum",
    quest: "Lorem ipsum dolor sit amet. quest umumB",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nulla! answer umumB",
  },
  {
    id: "rangkaianB",
    id_category: "rangkaian",
    quest: "Lorem ipsum dolor sit amet. quest rangkaianB",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nulla! answer rangkaianB",
  },
  {
    id: "penugasanB",
    id_category: "penugasan",
    quest: "Lorem ipsum dolor sit amet. quest penugasanB",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nulla! answer penugasanB",
  },
  {
    id: "acaraB",
    id_category: "acara",
    quest: "Lorem ipsum dolor sit amet. quest acaraB",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nulla! answer acaraB",
  },
  {
    id: "acaraA",
    id_category: "acara",
    quest: "Lorem ipsum dolor sit amet. quest acaraA",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nulla! answer acaraA",
  },
  {
    id: "acaraD",
    id_category: "acara",
    quest: "Lorem ipsum dolor sit amet. quest acaraD",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nulla! answer acaraD",
  },
  {
    id: "acaraC",
    id_category: "acara",
    quest: "Lorem ipsum dolor sit amet. quest acaraC",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nulla! answer acaraC",
  },
];

const groupData = [
  {
    id: "umum",
    title: "umum",
  },
  {
    id: "rangkaian",
    title: "rangkaian",
  },
  {
    id: "penugasan",
    title: "penugasan",
  },
  {
    id: "acara",
    title: "acara",
  },
  {
    id: "lokasi",
    title: "lokasi",
  },
];

export default function page() {
  const [quest, setQuest] = useState(null);
  const [search, setSearch] = useState(null);
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dataGroup, setDataGroup] = useState(groupData);
  const [dataQuest, setDataQuest] = useState(questData);

  const getData = async () => {
    apiFaq()
      .then((res) => {
        if (res.data.faqs.length > 0) {
          setDataGroup(res.data.category_faqs);
          setDataQuest(res.data.faqs);
        }
      })
      .catch((err) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <div className="bg-white font-poppins pb-8 min-h-screen relative">
        <div className="container mx-auto pt-24 relative z-3">
          <h1 className="font-agrandir text-blue font-bold text-2xl text-center">
            Halo Arkana, apakah kamu punya pertanyaan?
          </h1>
          {loading ? (
            <div className="w-full animate-pulse space-y-5">
              <div className="h-7 bg-gray-200 dark:bg-gray-500 w-full"></div>
              <div className="flex items-center space-x-2 w-full">
                {Array.from(Array(12).keys()).map((i) => (
                  <div className="h-2.5 bg-gray-200 rounded-full w-1/2"></div>
                ))}
              </div>
              <div className="px-5 space-y-3 bg-white shadow-inner py-5 rounded-md">
                {Array.from(Array(7).keys()).map((i) => (
                  <div className="h-4 bg-gray-200 rounded-lg dark:bg-gray-500 w-full "></div>
                ))}
              </div>
            </div>
          ) : (
            <>
              <div className="bg-white rounded-lg flex py-2 px-4 items-center mt-4 border-blue border-2">
                <img src="/assets/icons/fe_search.svg"></img>
                <input
                  className="bg-trans rounded-lg w-full ml-3 focus-visible:outline-0 lg:text-body md:text-body-md sm:text-body-sm font-medium text-blue"
                  placeholder="Cari apa sayang"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                ></input>
              </div>

              <div className="flex w-full overflow-x-scroll mt-4">
                <GroupFaq
                  key={1}
                  id={null}
                  active={group}
                  changeGroup={(n) => setGroup(n)}
                  name={"Semua"}
                ></GroupFaq>
                {dataGroup.map(g => {
                  return (
                    <GroupFaq
                      key={g.id}
                      id={g.id}
                      active={group}
                      changeGroup={n => setGroup(n)}
                      name={g.title}
                    ></GroupFaq>
                  );
                })}
              </div>
              <div className={`w-full rounded-lg p-2 flex flex-col overflow-y-scroll`}>
                {dataQuest
                .filter(q =>{
                    if (group == null) {
                        return q;
                    }else{
                        return q.id_category == group;
                    }
                })
                .filter(q=>{
                    if (search != null) {
                        return q.quest.toLowerCase().match(search.toLowerCase());
                    }else{
                        return q;
                    }
                })
                .map(e =>{
                    return (
                        <DropFaq
                            key={e.id}
                            id={e.id}
                            active={quest}
                            toggle = {e =>{
                                setQuest(e);
                            }}
                            quest = {e.quest}
                            answer = {e.answer}
                        ></DropFaq>
                    )
                })
                }
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
