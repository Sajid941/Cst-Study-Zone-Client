import { useQuery } from "@tanstack/react-query";
import SectTitle from "../SectTitle/SectTitle";
import './CstSubject.css'
import axios from "axios";
import { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const CstSubject = () => {
    const btnSemesters = ['1st', '2nd', '3rd', '4th', '5th', '6th'];
    const [semester, setSemester] = useState('6th')
    const { data: books, isPending } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await axios('6th_Semester_Books.json')
            return res.data
        }
    })
    console.log(semester);
    return (
        <section>
            <SectTitle title="Cst Subjects" />
            <div className="join flex justify-center my-10 hor">
                {
                    btnSemesters.map(btnSemester => (
                        <button
                            key={btnSemester}
                            className={`btn join-item ${semester === btnSemester && 'bg-mainColor'}`}
                            onClick={() => setSemester('6th')}
                            disabled={semester !== '6th'}
                        >

                            {btnSemester}
                        </button>
                    ))
                }
            </div>
            {
                isPending ?
                    <div className="flex justify-center my-20">
                        <span className="loading loading-spinner text-accent"></span>
                    </div> :
                    books.map((book, idx) => <div key={idx} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                        {
                            book.subjects.map((subject, idx) => <div key={idx} className="card card-shadow">
                                <figure className="px-10 pt-10">
                                    <img
                                        src={subject.image}
                                        alt="Shoes"
                                        className="rounded-xl w-[326px] h-[177px] object-cover" />
                                </figure>
                                <div className="card-body  flex flex-col flex-grow ">
                                    <h2 className="card-title">{subject.name}
                                        <div className="badge bg-mainColor">{subject.code}</div>
                                    </h2>
                                        <div className="card-actions justify-end my-2">
                                            <div className="badge badge-outline">#CST</div>
                                            <div className="badge badge-outline">#6th</div>
                                        </div>
                                    <p className="mb-2 font-medium">Teacher : <span className="bg-gradient-to-r to-[#073b4c] from-[#118ab2] text-transparent bg-clip-text">{subject.teacher}</span></p>
                                    <a href={subject.downloadLink} download className="btn bg-[#151515] hover:bg-[#3d3d3d]  text-white mt-auto shake" >
                                        Download Syllabus
                                        <MdOutlineFileDownload size={20} />
                                    </a>

                                </div>
                            </div>)
                        }
                    </div>)
            }
        </section>
    );
};

export default CstSubject;