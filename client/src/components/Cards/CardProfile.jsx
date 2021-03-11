import React from "react";

import Logo from '../../assets/img/logo.png';

export default function CardProfile() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="p-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="logo"
                  src={Logo}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
              Kita Catering Inc.
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
              Leipzig, Germany
            </div>
            <div className="mb-2 text-gray-700 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
              Catering services
            </div>
            {/* <div className="mb-2 text-gray-700">
              <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
              University of Computer Science
            </div> */}
          </div>
          <div className="mt-10 py-10 border-t border-gray-300 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-gray-800">
                  Multiple caterings services for educational facilities.
                </p>
                {/*  <a
                  href="/#"
                  className="font-normal text-blue-500"
                  onClick={(e) => e.preventDefault()}
                >
                  Show more
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
