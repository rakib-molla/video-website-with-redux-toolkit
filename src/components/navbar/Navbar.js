import Search from "./Search";
import logoImage from '../../assets/lws.svg';
import searchImage from '../../assets/search.svg';
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        // <!-- navigation -->
        <nav className="bg-slate-100 shadow-md">
            <div
                className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3"
            >
                <Link to="/">
                    <img
                        className="h-10"
                        src={logoImage}
                        alt="Learn with Sumit"
                    />
                </Link>
                <div
                    className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
                >
                    {/* <!-- search --> */}
                    <Search/>
                    <img
                        className="inline h-4 cursor-pointer"
                        src={searchImage}
                        alt="Search"
                    />
                </div>
            </div>
        </nav>
    )
}