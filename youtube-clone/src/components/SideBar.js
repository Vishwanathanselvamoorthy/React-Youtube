import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faWallet,
  faUser,
  faClockRotateLeft,
  faVideo,
  faThumbsUp,
  faFire,
  faWifi,
  faClapperboard,
  faMusic,
  faBagShopping,
  faGamepad,
  faNewspaper,
  faTrophy,
  faLightbulb,
  faShirt,
  faPodcast,
  faGear,
  faFlag,
  faCircleQuestion,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { faSquareYoutube } from "@fortawesome/free-brands-svg-icons";

const SideBar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  if (isMenuOpen) return null;
  return (
    <div className="text-white w-48   font-semibold bg-[#0f0f0f]  mt-32   ">
      <div class="border-b-2 border-[#3c3c3c] ml-2 py-2">
        <ul class="list-none p-0">
          <Link to="/">
            <li class="mb-4 hover:bg-[#3c3c3c] rounded-xl p-1">
              <FontAwesomeIcon className="mr-3" icon={faHouse} />
              Home
            </li>
          </Link>

          <li class="mb-4 hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon className="mr-3" icon={faHouse} />
            Shorts
          </li>
          <li className="hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon className="mr-3" icon={faWallet} />
            Subscriptions
          </li>
        </ul>
      </div>

      <div>
        <h2 className="m-5 text-xl">You</h2>
        <ul class="border-b-2 border-[#3c3c3c]  p-2">
          <li class="mb-4 hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon className="mr-3" icon={faUser} />
            Your Channel
          </li>
          <li class="mb-4 hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon className="mr-3" icon={faClockRotateLeft} />
            History
          </li>
          <li class="mb-4 hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon className="mr-3" icon={faVideo} />
            Your Videos
          </li>
          <li class="mb-4 hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon className="mr-3" icon={faClockRotateLeft} />
            Watch Later
          </li>
          <li className="hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon className="mr-3" icon={faThumbsUp} />
            Liked Videos
          </li>
        </ul>
      </div>

      <div>
        <h2 className="m-5 text-xl">Subscriptions</h2>
        <ul class="border-b-2 border-[#3c3c3c] ml-2 py-2">
          <li class="mb-4 hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon
              className="mr-3 text-red-600"
              icon={faSquareYoutube}
            />
            Mr.Beast
          </li>
          <li class="mb-4 hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon
              className="mr-3 text-red-600"
              icon={faSquareYoutube}
            />
            Irfan's Views
          </li>
          <li class="mb-4 hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon
              className="mr-3 text-red-600"
              icon={faSquareYoutube}
            />
            Madan Gowri
          </li>
          <li class="mb-4 hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon
              className="mr-3 text-red-600"
              icon={faSquareYoutube}
            />
            Meta Monkeys
          </li>
          <li className="hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon
              className="mr-3 text-red-600"
              icon={faSquareYoutube}
            />
            A2D
          </li>
        </ul>
      </div>

      <div>
        <h2 className="m-5 text-xl">Explore</h2>
        <ul className="border-b-2 border-[#3c3c3c] ml-2 overflow-x-auto py-2">
          <li class="mb-4 hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon className="mr-3" icon={faFire} />
            Trending
          </li>
          <li class="mb-4 hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon className="mr-3" icon={faBagShopping} />
            Shopping
          </li>
          <li class="mb-4 hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon className="mr-3" icon={faMusic} />
            Music
          </li>
          <li class="mb-4 hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon className="mr-3" icon={faClapperboard} />
            Movies
          </li>
          <li class="mb-4 hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon icon={faWifi} />
            Live
          </li>
          <li class="mb-4 hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon className="mr-3" icon={faGamepad} />
            Gaming
          </li>
          <li class="mb-4 hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon className="mr-3" icon={faNewspaper} />
            News
          </li>
          <li class="mb-4 hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon className="mr-3" icon={faTrophy} />
            Sports
          </li>
          <li class="mb-4 hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon className="mr-3" icon={faLightbulb} />
            Learning
          </li>
          <li class="mb-4 hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon className="mr-3" icon={faShirt} /> Fashion & Beauty
          </li>
          <li class="mb-4 hover:bg-[#3c3c3c] rounded-xl p-1">
            {" "}
            <FontAwesomeIcon className="mr-3" icon={faPodcast} />
            Podcasts
          </li>
        </ul>
      </div>

      <div>
        <h2 className="m-5 text-xl">More From Youtube</h2>
        <ul className="border-b-2 border-[#3c3c3c] ml-2 py-2 ">
          <li class="mb-4 hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon className="mr-3" icon={faSquareYoutube} />
            YouTube Premium
          </li>
          <li class="mb-4 hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon className="mr-3" icon={faSquareYoutube} />
            YouTube Studio
          </li>
          <li class="mb-4 hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon className="mr-3" icon={faSquareYoutube} />
            YouTube Music
          </li>
          <li class="mb-4 hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon className="mr-3" icon={faSquareYoutube} />
            YouTube Kids
          </li>
        </ul>
      </div>

      <div class="border-b-2 border-[#3c3c3c] ml-2 py-2">
        <ul>
          <li class="mb-2 hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon className="mr-3" icon={faGear} />
            Settings
          </li>
          <li class="mb-2 hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon className="mr-3" icon={faFlag} />
            Report History
          </li>
          <li class="mb-2 hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon className="mr-3" icon={faCircleQuestion} />
            Help
          </li>
          <li className="hover:bg-[#3c3c3c] rounded-xl p-1">
            <FontAwesomeIcon className="mr-3" icon={faCircleExclamation} />
            Send Feedback
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
