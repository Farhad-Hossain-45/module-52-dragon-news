import { useLoaderData } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import LeftSideNav from "../Pages/Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import RightSideNav from "../Pages/Shared/RightSideNav/RightSideNav";
import LatestNews from "./LatestNews";
import NewsCard from "../components/NewsCard/NewsCard";


const Home = () => {
    const news = useLoaderData()
    // console.log(news)
    return (
        <div>
            <Header></Header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-6 mt-10">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 border">
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
            
        </div>
    );
};

export default Home;