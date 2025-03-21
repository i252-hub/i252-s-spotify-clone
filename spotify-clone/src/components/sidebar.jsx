import HomeFillIcon from "../assets/Sidebar/Home_Fill_S.svg";
import SearchIcon from "../assets/Sidebar/Search_S.svg";
import LibraryIcon from "../assets/Sidebar/Library_S.svg";
import PlaylistIcon from "../assets/Sidebar/+Library_S.svg";
import LikedSongsIcon from "../assets/Sidebar/Liked Songs_S.svg";

const Sidebar = () =>{
    return (
        <>
         <div className="bg-[#000000] h-full flex flex-col">
            <div className="w-full h-[70%]">
              <div className="w-full h-[50%] pt-12 pl-5">
              <div className="flex gap-3 pb-3">
                  <img src={HomeFillIcon} className="w-6 h-6"/>
                  <p className="text-white font-medium">Home</p>
                </div>
                <div className="flex gap-3 pb-3">
                <img src={SearchIcon} className="w-6 h-6 opacity-70"/>
                <p className="text-white font-medium opacity-70">Search</p>
                </div>
                <div className="flex gap-3">
                <img src={LibraryIcon} className="w-6 h-6 opacity-70"/>
                <p className="text-white font-medium opacity-70">Your Library</p>
                </div>
              </div>
              <div className="w-full h-[50%] pt-12 pl-5">
                <div className="flex gap-3 pb-3">
                <img src={PlaylistIcon} className="w-6 h-6 opacity-70"/>
                <p className="text-white font-medium opacity-70">Create Playlist</p>
                </div>
                <div className="flex gap-3 pb-3">
                <img src={LikedSongsIcon} className="w-6 h-6 opacity-70"/>
                <p className="text-white font-medium opacity-70">Liked Songs</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
            <div className="border-b-[1px] border-b-[#282828] w-[85%]"></div>
            </div>
            <div className="w-full h-full">
            </div>
          </div>
        </>
    )
}

export default Sidebar;