import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import picture1 from "../../../assets/1.png"
import picture2 from "../../../assets/2.png"
import picture3 from "../../../assets/3.png"




const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    // console.log(categories)
    return (
        <div>
            <div className="">
                <h1 className="text-2xl font-black">All Category</h1>
                <p className="bg-gray-300 px-4 text-center py-2 mt-3 rounded-lg font-semibold">National News</p>
            </div>
            <div className="space-y-7">
                {
                    categories.map(category => <NavLink className="block text-xl font-semibold mt-3 ml-5 " key={category.id}> {category.name} </NavLink>)
                }
            </div>
            <div className="mt-9">
                <img src={picture1} alt="" />

                <p className="mt-3 font-light ">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            </div>
            <div className="mt-9">
                <img src={picture2} alt="" />

                <p className="mt-3 font-light ">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            </div>
            <div className="mt-9">
                <img src={picture3} alt="" />

                <p className="mt-3 font-light ">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            </div>
        </div>
    );
};

export default LeftSideNav;