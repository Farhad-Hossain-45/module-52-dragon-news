/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import Header from "../../Pages/Shared/Header/Header";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
// import { useEffect, useState } from "react";
// import NewsDetailsCard from "../NewsDetailsCard/NewsDetailsCard";


const NewsDetails = () => {
    const {id} = useParams();
    
    // const [datas,setData] = useState('')
    // useEffect(()=>{
    //     fetch('/news.json')
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // },[])
    // console.log(datas)
   
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        {id}
    </div>
  );
};

export default NewsDetails;
