import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const CollegeCard = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_url}colleges`)
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])
    return (
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 mt-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-center">Best Colleges</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
                {
                    colleges.slice(0, 3).map(college => <div className="shadow-lg p-4 rounded border-[#4021a5] border-y-2" key={college.id} data-aos="flip-up" data-aos-duration="1000">
                        <img className="rounded" src={college.image} alt="" />
                        <div className="mt-4">
                            <h4 className="text-xl text-center font-semibold mb-3">{college.name}</h4>
                            <p><span className="font-semibold">Admission Date:</span> {college.admissionDate}</p>
                            <div className="flex justify-between my-3">
                                <div><span className="font-semibold">Events:</span> {college.events.map(event => <ul key={event.id}>
                                    <li>{event.id} {event.name}</li>
                                </ul>)}</div>
                                <div><span className="font-semibold">Sports:</span> {college.sports.map(sport => <ul key={sport.id}>
                                    <li>{sport.id} {sport.name}</li>
                                </ul>)}</div>
                            </div>
                            <p><span className="font-semibold">Research History:</span> {college.researchHistory}</p>
                        </div>
                        <div className="text-center mt-4">
                            <Link to={`/view-details/${college.id}`} className="btn-all w-full mt-3">Details</Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CollegeCard;