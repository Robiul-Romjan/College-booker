import Banner from "../../components/Shared/Banner/Banner";
import CollegeCard from "../../components/Shared/CollegeCard/CollegeCard";
import CollegeGallery from "../../components/Shared/CollegeGallery/CollegeGallery";
import ResearchPaper from "../../components/Shared/ResearchPaper/ResearchPaper";


const Home = () => {
    return (
        <div>
            <Banner />
            <CollegeCard />
            <CollegeGallery />
            <ResearchPaper />
        </div>
    );
};

export default Home;