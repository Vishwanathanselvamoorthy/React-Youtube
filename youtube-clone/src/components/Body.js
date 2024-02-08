import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
import VideoContainer from "./VideoContainer";

const Body = () => {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};
export default Body;
