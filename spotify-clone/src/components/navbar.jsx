import LeftArrowNav from "../assets/Navbar/Back.svg";
import RightArrowNav from "../assets/Navbar/Forward.svg";
import MiniDownArrowNav from "../assets/Navbar/Polygon 3.svg";
import UserProfile from "../assets/Navbar/willofabyss.png";
const Navbar = () => {
    return (
        <>
       <nav className="h-[10%] w-full flex pt-5 items-center">
        <div className="w-[50%]">
        <div className="w-[20%] flex justify-start gap-3 pl-7">
            <img src={LeftArrowNav} className="w-7 h-7"/>
            <img src={RightArrowNav} className="w-7 h-7"/>
        </div>
        </div>
        <div className="w-[50%]">
            <div className="flex justify-end pr-7">
            <div className="flex items-center gap-2 justify-center bg-black opacity-80 rounded-[40px] pt-1 pb-1 pr-2 pl-1">
                <img src={UserProfile} className="w-7 h-7 rounded-2xl"/>
                <p className="text-white z-20 text-[12px] font-medium">alice456</p>
                <img src={MiniDownArrowNav} className="w-3 h-3"/>
            </div>
            </div>
        </div>
       </nav>
        </>
    )
}

export default Navbar;