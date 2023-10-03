import { BsGoogle, BsGithub, BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import image1 from "../../../assets/qZone1.png"
import image2 from "../../../assets/qZone2.png"
import image3 from "../../../assets/qZone3.png"

const RightSideNav = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-2xl font-black">Login With</h1>
        <button className="btn btn-outline mt-3 px-9 mb-2">
          <BsGoogle></BsGoogle>
          Login With Google
        </button>
      </div>
      <button className="btn btn-outline px-10">
        <BsGithub></BsGithub>
        Login With GitHub
      </button>
      <div className="">
        <h1 className="text-2xl font-black mt-9">Find Us on</h1>
        <a className="flex gap-3 items-center border p-3 rounded-t-lg" href="#">
            <BsFacebook></BsFacebook>
            Facebook
        </a>
        <a className="flex gap-3 items-center border p-3" href="#">
            <BsTwitter></BsTwitter>
            Facebook
        </a>
        <a className="flex gap-3 items-center border p-3 rounded-b-lg" href="#">
            <BsInstagram></BsInstagram>
            Facebook
        </a>
      </div>
      <div className="bg-gray-100">
        <h1 className="text-2xl font-black mt-9">Q-Zone</h1>
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
