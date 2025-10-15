// import React from "react";
// import Image from "next/image";
// import heroHospital from "@/accets/hero-hospital.jpg";

// const HeroSection = () => {
//     return (
//         <div>
//             <main className="flex min-h-screen flex-col items-center justify-between mt-10 pt-20 px-8 bg-white">
//                 <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-8 w-full">
//                     {/* Left Content */}
//                     <div className="flex-1 space-y-8 w-full">
//                         {/* Trusted Provider Badge */}
//                         <span className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
//                             Trusted Healthcare Provider
//                         </span>

//                         {/* Heading */}
//                         <div className="space-y-2">
//                             <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
//                                 <span>Your Health, </span>
//                                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
//                                     Our Priority
//                                 </span>
//                             </h1>
//                         </div>

//                         {/* Description */}
//                         <p className="text-lg text-gray-600 max-w-md">
//                             Experience world-class healthcare with our team of expert doctors.
//                             Book appointments easily and get the care you deserve.
//                         </p>

//                         {/* CTA Button aligned right */}
//                         <div className="w-full flex sm:justify-end justify-center">
//                             <button className="border-gray-500 border  text-gray-500 hover:bg-green-200 cursor-pointer hover:text-black px-8 py-2 md:me-50 rounded-lg font-semibold text-lg transition-colors">
//                                 Find Doctors
//                             </button>
//                         </div>

//                         {/* Stats Section */}
//                         <div className="flex flex-col sm:flex-row gap-8 pt-4">
//                             <div className="text-center">
//                                 <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
//                                     500+
//                                 </div>
//                                 <div className="text-sm text-gray-600">Expert Doctors</div>
//                             </div>

//                             <div className="text-center">
//                                 <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
//                                     50k+
//                                 </div>
//                                 <div className="text-sm text-gray-600">Happy Patients</div>
//                             </div>

//                             <div className="text-center">
//                                 <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
//                                     98%
//                                 </div>
//                                 <div className="text-sm text-gray-600">Satisfaction</div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Image */}
//                     <div className="flex-1 relative h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-gray-500">
//                         <div className="absolute inset-0 animate-float">
//                             <Image
//                                 src={heroHospital}
//                                 alt="Hero Image"
//                                 fill
//                                 className="object-cover"
//                                 priority
//                             />
//                         </div>
//                     </div>

//                 </div>
//             </main>
//         </div>
//     );
// };

// export default HeroSection;

import React from "react";
import Image from "next/image";
import heroHospital from "@/accets/hero-hospital.jpg";

const HeroSection = () => {
  return (
    <section className="bg-white flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-20  pb-12 min-h-screen">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center lg:items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 w-full space-y-8 text-center md:text-left">
          {/* Trusted Provider Badge */}
          <span className="inline-block bg-blue-50 text-blue-600 px-5 py-2 rounded-full text-sm font-medium">
            Trusted Healthcare Provider
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            <span>Your Health, </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
              Our Priority
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
            Experience world-class healthcare with our team of expert doctors.
            Book appointments easily and get the care you deserve.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center lg:justify-start">
            <button className="border border-gray-500 text-gray-700 hover:bg-green-200 hover:text-black px-8 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300">
              Find Doctors
            </button>
          </div>

          {/* Stats Section */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12 pt-6">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
                500+
              </div>
              <div className="text-sm sm:text-base text-gray-600">Expert Doctors</div>
            </div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
                50k+
              </div>
              <div className="text-sm sm:text-base text-gray-600">Happy Patients</div>
            </div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
                98%
              </div>
              <div className="text-sm sm:text-base text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative w-full h-72 sm:h-96 lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl shadow-gray-500">
          <div className="absolute inset-0 animate-float">
            <Image
              src={heroHospital}
              alt="Hero Image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
