import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 md:mt-10 gap-5 items-center">
                <div className="md:p-5 lg:order-1">
                    <div className="relative">
                        <img src="https://i.postimg.cc/DZHRJr6q/IMG20240308122203.jpg" alt="Our_Image" className="rounded-2xl" />
                        <div className="bg-gradient-to-t from-black/90 to-black/5 w-full h-full absolute top-0 rounded-2xl text-white flex justify-center md:justify-start">
                            <p
                                className="absolute bottom-3 md:left-5 bg-white rounded-full bg-opacity-15 px-3 py-1 border border-gray-500 text-xs md:text-sm">
                                Computer Science & Technology
                            </p>
                        </div>
                    </div>
                </div>
                <div className="md:space-y-7 space-y-4">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-medium">Our Institute</h2>
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold "><span className="text-[#0068dc]">City </span> Polytechnic Institute</h1>
                    <p className="text-[#737373]">
                        <span className="bg-gradient-to-r from-[#0068dc] to-black inline-block text-transparent bg-clip-text font-medium">City Polytechnic Institute</span> (CPI), located in <span className="text-black">Khalispur, Khulna, Bangladesh</span>, is a prominent educational institution dedicated to providing high-quality technical and vocational education. This institute is committed to equipping students with the skills and knowledge necessary to thrive in various technical fields and industries.
                    </p>
                    <Link target="_blank" to="https://cpik.ac.bd/en/home-en/" className="btn bg-mainColor hover:bg-[#2adda9] ">Visit <FiExternalLink size={15}/></Link>
                </div>
            </div>
        </section>
    );
};

export default Banner;