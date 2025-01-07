import { Helmet } from "react-helmet";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import HighestRatedReviews from "../components/HighestRatedReviews ";
import PopularGames from "../components/PopularGames";
import AboutPlatform from "../components/AboutPlatform ";



const Home = () => {
    return (
      <div className="container mx-auto py-8">
        <Helmet>
          <title>Home Page || GameScope</title>
        </Helmet>
        <div>
          <Banner></Banner>
         
          <HighestRatedReviews></HighestRatedReviews>
          
          <PopularGames></PopularGames>
          <AboutPlatform></AboutPlatform>
          <Contact></Contact>
        </div>
      </div>
    );
};

export default Home;