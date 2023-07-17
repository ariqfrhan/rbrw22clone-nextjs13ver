import axios from "axios";

export const url = "https://rajabrawijaya.ub.ac.id/api/";

export const apiFaq = () => axios.get(url +"faq");

export const apiVideo = () => axios.get(url + "video");

export const apiNews = () => axios.get(url + "news");

export const apiNewsOnce = (id:number) => axios.get(url+ "news/" +id);

export const apiUkm = async () =>{
}