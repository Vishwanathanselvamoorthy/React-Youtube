import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faUser,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { YOUTUBE_SEARCH_API } from "./utils/constants";
import ButtonList from "./ButtonList";
import { cacheDetails } from "./utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        fetchSearchApi();
      }
    }, 0);
  }, [searchQuery]);

  const fetchSearchApi = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);

    const json = await data.json();

    // console.log(json[1]);
    setSuggestion(json[1]);

    dispatch(
      cacheDetails({
        [searchQuery]: json[1],
      })
    );
  };

  const sideBardFunc = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex flex-col  fixed left-0 right-0 bg-[#0f0f0f] p-3  ">
      <div className="flex px-5 justify-between py-3  w-full items-center  mt-0 ">
        <div className="flex gap-8 items-center mt-0">
          <div>
            <FontAwesomeIcon
              onClick={() => sideBardFunc()}
              className="text-2xl text-white"
              icon={faBars}
            />
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              className="text-2xl bg-white text-red-700 rounded-full p-1"
              icon={faYoutube}
            />
            <h1 className="text-2xl font-bold  font-mono text-white">
              YeahTube
            </h1>
          </div>
        </div>

        <div>
          <div>
            <input
              className="w-[600px] border-2 border-gray-600 p-1 rounded-l-full bg-transparent placeholder:pl-3 font-semibold text-white"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className=" border-2 border-gray-600 p-1 rounded-r-full px-5 text-white bg-[#3c3c3c]">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>

            {searchQuery && (
              <div className="bg-[#3c3c3c] mt-3 fixed  z-10  w-[600px] rounded-lg p-2">
                {suggestion.map((s) => (
                  <ul className="text-white ml-5 font-bold">
                    <li key={s}>
                      <FontAwesomeIcon
                        className="mr-3"
                        icon={faMagnifyingGlass}
                      />
                      {s}
                    </li>
                  </ul>
                ))}
              </div>
            )}
          </div>
          {/* <div>
          <button className="ml-6 bg-[#3c3c3c] p-2 rounded-full ">
            <FontAwesomeIcon
              className="text-white text-xl"
              icon={faMicrophone}
            />
          </button>
        </div> */}
        </div>

        <div>
          <ul>
            <li></li>
          </ul>
        </div>
        <div>
          <FontAwesomeIcon
            className="text-2xl bg-[#3c3c3c] p-2 rounded-full text-white"
            icon={faUser}
          />
        </div>
      </div>

      <div className="w-[1200px] ml-auto mr-auto text-center ">
        <ButtonList />
      </div>
    </div>
  );
};

export default Header;
