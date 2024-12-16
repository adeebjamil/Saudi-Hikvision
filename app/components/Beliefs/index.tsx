
const Beliefs = () => {
    return (
        <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5'>

                {/* COLUMN-1 */}

                <div className="bg-darkblue bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-semibold text-white tracking-widest mb-5 text-center sm:text-start">BELIEFS</h2>
                    <h3 className="text-4xl sm:text-65xl font-bold text-white leading-snug mb-5 text-center sm:text-start">Our Core Values: <span className="text-grey">Integrity and Dedications.</span></h3>
                    <h5 className="text-offwhite pt-2 mb-5 text-center sm:text-start">At our company, honesty and hard work form the foundation of everything we do. We are committed to providing exceptional service with unwavering dedication, ensuring smooth operations and successful outcomes for our clients at every step.</h5>
                    <div className="text-center sm:text-start">
                    <button 
    className="text-sm py-3 px-8 mt-5 font-semibold text-white 
               rounded-full bg-blue border border-blue 
               hover:bg-hoblue transition-colors duration-300"
>
    Get Started
</button>
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className="bg-build pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                <h2 className="text-lg font-bold text-[#FFFFFF] tracking-widest mb-5 text-center sm:text-start">BUILDS</h2>
                    <h3 className="text-4xl sm:text-65xl font-bold text-[#909090] leading-snug mb-5 text-center sm:text-start"><span className="text-[#ffffff]">Bring Your Vision to Life</span> with Our Expertise and Support.</h3>
                    <h5 className="bluish pt-2 mb-5 text-center sm:text-start text-white">Turn your great idea into reality with our expertise and support. We are here to help you build and execute your vision, providing a seamless and efficient process from start to finish, ensuring that your ideas thrive and succeed.</h5>
                    <div className="text-center sm:text-start">
                    <button 
    className="text-sm py-3 px-8 mt-5 font-semibold text-white 
               rounded-full bg-blue border border-blue 
               hover:bg-hoblue transition-colors duration-300"
>
    Learn More
</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Beliefs;
