import SectTitle from "../SectTitle/SectTitle";
import { IoPersonOutline } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import "./DailyWorks.css"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const DailyWorks = () => {
    const { data: works = [] } = useQuery({
        queryKey: ["Home works"],
        queryFn: async () => {
            const res = await axios('daily_work.json')
            return res.data
        }
    })
    return (
        <section>
            <SectTitle title="Daily Works" />
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-7">
                {
                    works.map((work, idx) => <div key={idx} className="w-full  duration-700 p-5 rounded-xl flex flex-col lg:flex-row gap-4 card-shadow ">
                        {/* Home Work image side */}
                        <div className="space-y-3 lg:border-r pr-3 border-black">
                            <img
                                onClick={() => document.getElementById('my_modal_3').showModal()}
                                src="https://i.postimg.cc/tCcDxmVv/download.jpg"
                                alt="Home work image"
                                className="h-[120px] w-full object-cover cursor-pointer" />
                            {/* Image Modal */}
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <img src="https://i.postimg.cc/tCcDxmVv/download.jpg" alt="" className="h-full w-full" />
                                </div>
                            </dialog>
                        </div>

                        {/* Home Work Details side  */}
                        <div className="space-y-1">
                            <div className="flex gap-2 line-clamp-1 lg:max-w-[25vw] xl:max-w-[30vw]">
                                <h3 className="text-[16px] md:text-xl font-medium subject-name">{work.subject_name}</h3>
                                <div className="badge bg-mainColor">{work.subject_code}</div>
                            </div>
                            <div className="flex gap-4 text-[10px] md:text-xs">
                                <p className="tag"><IoPersonOutline /> {work.user_name} </p>
                                <p className="tag"><MdMenuBook /> Chapter: {work.chapter} </p>
                                <p className="tag"><FaRegCalendarAlt /> Date: {work.date} </p>
                            </div>
                            <div>
                                <h6 className="">Home Work : <br />{work.HW} </h6>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default DailyWorks;