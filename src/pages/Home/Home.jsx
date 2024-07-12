import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import CstSubject from "../../components/CstSubject/CstSubject";

const Home = () => {
    return (
        <main className="mx-5 md:mx-10 lg:mx-28">
        <Helmet>
            <title>Home | Cst Study Zone</title>
        </Helmet>
        <Banner/>
        <CstSubject/>
        </main>
    );
};

export default Home;