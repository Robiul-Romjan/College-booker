import { useEffect, useState } from "react";


const Admission = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])
    return (
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 mt-24">
            <h2 className="text-2xl md:text-3xl font-semibold text-center">Open For Admissions</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
                {
                    colleges.map(college => <div key={college.id}>
                        <button className="shadow-lg p-4 rounded hover:shadow-xl border">{college.name}</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Admission;