import img1 from "../../../assets/images/img.jpg"
import img2 from "../../../assets/images/img-2.jpg"
import img3 from "../../../assets/images/img-3.jpg"
import img4 from "../../../assets/images/img-4.jpg"
import img5 from "../../../assets/images/img-5.jpg"
import img6 from "../../../assets/images/img-6.jpg"

const CollegeGallery = () => {
    return (
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 mt-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-center">Our Galleries</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
               <img className="w-full h-64 rounded hover:-translate-y-3 cursor-pointer transition-all" src={img1} alt="" />
               <img className="w-full h-64 rounded hover:-translate-y-3 cursor-pointer transition-all" src={img2} alt="" />
               <img className="w-full h-64 rounded hover:-translate-y-3 cursor-pointer transition-all" src={img3} alt="" />
               <img className="w-full h-64 rounded hover:-translate-y-3 cursor-pointer transition-all" src={img4} alt="" />
               <img className="w-full h-64 rounded hover:-translate-y-3 cursor-pointer transition-all" src={img5} alt="" />
               <img className="w-full h-64 rounded hover:-translate-y-3 cursor-pointer transition-all" src={img6} alt="" />  
            </div>
        </div>
    );
};

export default CollegeGallery;