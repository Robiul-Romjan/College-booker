import "./Banner.css"

const Banner = () => {
    return (
        <div className="banner flex items-center justify-center">
            <div className="text-white w-full px-6 md:px-0 md:w-2/3 text-center">
                <h1 className="text-2xl md:text-4xl lg:text-6xl"> Ultimate College Booking Hub</h1>
                <p className="my-3">Our user-friendly interface ensures that you can effortlessly browse through available booking slots, compare prices, and find the perfect match for your preferences.</p>
                <button className="btn-all">Explore More</button>
            </div>
        </div>
    );
};

export default Banner;