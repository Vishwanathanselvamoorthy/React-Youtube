import { useState, useEffect } from "react";
import { MAIN_API } from "./utils/constants";
import Video from "./Video";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [api, setApi] = useState([]);
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch(MAIN_API);

    const json = await data.json();

    // console.log(json);

    setApi(json.items);
  };

  return (
    <div>
      {isMenuOpen ? (
        <div className="grid grid-cols-4 w-[1600px] my-5 px-10">
          {api.map((video) => (
            <div className="overflow-hidden">
              <Link to={"/watch?v=" + video.id}>
                <Video key={video.id} videos={video} />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className=" grid grid-cols-3 w-[1530px] ml-10 my-5 pr-28">
          {api.map((video) => (
            <div className="overflow-hidden">
              <Link to={"/watch?v=" + video.id}>
                <Video key={video.id} videos={video} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default VideoContainer;
