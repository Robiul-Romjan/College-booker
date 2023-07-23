import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const College = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])
    return (
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 mt-24">
            <h2 className="text-2xl md:text-3xl font-semibold text-center">All Colleges</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
                {
                    colleges.map(college => <div className="shadow-lg p-4 rounded border-[#4021a5] border-y-2" key={college.id} data-aos="flip-up" data-aos-duration="1000">
                        <img className="rounded" src={college.image} alt="" />
                        <div className="mt-4">
                            <h4 className="text-xl text-center text-[#4021a5] font-semibold mb-3">{college.name}</h4>
                            <p><span className="font-semibold">Admission Date:</span> {college.admissionDate}</p>
                            <p><span className="font-semibold">Research Count:</span> {college.researchCount} research</p>
                            <p><span className="font-semibold">Ratings:</span> {college.rating} stars</p>
                        </div>
                        <Link to={`/view-details/${college.id}`} className="btn-all w-full mt-3">Details</Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default College;