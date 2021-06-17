import React from "react";

// components

import Navbar from "../components/Navbars/IndexNavbar.js";
import Footer from "../components/Footers/Footer.js";
import AddComposition from "../components/AddComposition.js";

export default function versioned(props) {
  return (
    <>
      <Navbar />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              opacity: "60%",
              backgroundImage:
                "url('https://www.healtheuropa.eu/wp-content/uploads/2018/04/Electronic-Health-Records.jpg')",
            }}
          ></div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-blue font-semibold text-5xl">
                    EHR records
                  </h1>
                  <p className="mt-4 text-lg text-blue">
                    REST API for maintainment of Compositions from EHR records
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <AddComposition {...props} />
        </section>
      </main>
      <Footer />
    </>
  );
}
