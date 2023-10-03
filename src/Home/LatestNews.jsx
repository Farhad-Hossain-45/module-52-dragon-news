import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div>
      <div className="flex bg-gray-300 rounded-lg mt-4">
        <button className="btn btn-secondary">Latest</button>
        <Marquee speed={100} pauseOnHover={true}>
          <Link to="/">
          I can be a React component, multiple React components, or just some
          text.
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
