import Donate from "../Components/Donate";
import Events from "../Components/Events";
import Hero from "../Components/Hero/Hero";
import Programs from "../Components/Programs/Programs";
import Services from "../Components/Services";
import WeAre from "../Components/WeAre";

const Home = () => {
    return (
        <>
            <Hero />
            <WeAre />
            <Services />
            <Programs />
            <Donate />
            <Events />

        </>
    )
};

export default Home;