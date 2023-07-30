import React from "react";
import bitcoinImg from "../assets/bitcoin.png";
import ethereumImg from "../assets/ethereum.png";

const JoinUs = () => {
  return (
    <section id="joinus">
      <div className="max-w-[130rem] mx-auto px-10">
        <div className="flex flex-col justify-center items-center">
          <div className="relative">
            <img
              src={bitcoinImg}
              alt="bitcoin"
              className="hidden md:block absolute top-[4.5rem] left-[-5.5rem] w-[4.5rem] h-[4.5rem] lg:left-[-6.7rem] animate-bounce"
            />
            <h1 className="font-bold text-primary text-5xl xs:text-6xl sm:text-8xl text-center uppercase">
              join us via <br />
              <span className="text-gradient1 uppercase">discord</span>
            </h1>
            <img
              src={ethereumImg}
              alt="ethereum"
              className="hidden md:block absolute top-[4.5rem] right-[-5.5rem] w-[4.5rem] h-[4.5rem] lg:right-[-6.5rem] animate-bounce"
            />
            <p className="text-center text-primary text-xl my-10">
              Invest and manage all your crypto at one place.
            </p>
          </div>
          <a
              href="#market"
              className="text-primary flex my-10 justify-center p-4 rounded-[10rem] text-[1.25rem] font-semibold transition-all duration-200 w-[15rem] bg-gradient-to-tr from-text_gradient_start to-text_gradient_end"
            >
              Join via Discord
            </a>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
