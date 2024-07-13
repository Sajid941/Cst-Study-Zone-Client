import SectTitle from "../SectTitle/SectTitle";
import { IoPersonOutline } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import "./DailyWorks.css"

const DailyWorks = () => {
    return (
        <section>
            <SectTitle title="Daily Works" />
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
                <div className="w-full border-2 hover:border-[#747474] duration-700 p-5 rounded-xl flex flex-col lg:flex-row gap-4 ">
                    {/* Home Work image side */}
                    <div className="space-y-3 lg:border-r pr-3 border-black">
                        <img src="https://i.postimg.cc/tCcDxmVv/download.jpg" alt="" className="h-[120px] w-full object-cover" />
                        <a href="https://i.postimg.cc/tCcDxmVv/download.jpg" download className="btn btn-xs bg-[#151515] text-white " >
                            Download
                        </a>
                    </div>
                    {/* Home Work Details side  */}
                    <div className="space-y-1">
                        <div className="flex gap-2 line-clamp-1 lg:max-w-[25vw] xl:max-w-[30vw]">
                            <h3 className="text-[16px] md:text-xl font-medium subject-name">Microcontroller Based System Design & Development</h3>
                            <div className="badge bg-mainColor">28541</div>
                        </div>
                        <div className="flex gap-4 text-[10px] md:text-xs">
                            <p className="tag"><IoPersonOutline /> Sajid Islam </p>
                            <p className="tag"><MdMenuBook /> Chapter: 6 </p>
                            <p className="tag"><FaRegCalendarAlt /> Date: 13-08-23 </p>
                        </div>
                        <div>
                            <h6 className="">Home Work : <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda sint sit dolor.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DailyWorks;