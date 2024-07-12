import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import studyAnimation from '../../assets/study_animation.json'
import './HomeWork.css'
import DailyWorks from "../../components/DailyWorks/DailyWorks";
const HomeWork = () => {
    return (
        <main className="mx-5 md:mx-10 lg:mx-28">
            <Helmet>
                <title>Home Work | Cst Study Zone</title>
            </Helmet>
            <header className="grid  grid-cols-2 mt-5 md:mt-10 items-center justify-center gap-2">
                <div className="flex justify-center">
                    <ul className="font-semibold space-y-2 md:space-y-5   motive-container">
                        <li>{"Don't just learn ;"} <span className="motive">Experience</span></li>
                        <li>{"Don't just read ;"}  <span className="motive">Absorb</span></li>
                        <li>{"Don't just think ;"} <span className="motive">Ponder</span></li>
                        <li>{"Don't just dream ;"} <span className="motive">Do</span></li>
                    </ul>
                </div>
                <div className="w-42 md:w-96 card-shadow mx-auto border ">
                    <Lottie animationData={studyAnimation} loop={true}  />
                </div>
            </header>
            <DailyWorks/>
        </main>
    );
};

export default HomeWork;