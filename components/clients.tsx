"use client";
import LogoTicker from "./ticker";

const Clients = () => {
  return (
    <section className=" py-12 my-6 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 font-poppins mb-4">
          Our Clients
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10 font-poppins">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <LogoTicker />
    </section>
  );
};

export default Clients;
