import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";

const Home = () => {
    return (
        <div className="mx-5 md:mx-10 lg:mx-28">
        <Helmet>
            <title>Home | Cst Study Zone</title>
        </Helmet>
        <Banner/>
        </div>
    );
};

export default Home;