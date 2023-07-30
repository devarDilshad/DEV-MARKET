import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData, options } from "../utils/fetchData";

const CoinsDetail = () => {
  const [coin, setCoin] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    const fetchCoin = async () => {
      const coinData = await fetchData(
        `https://coinranking1.p.rapidapi.com/coin/${id}`,
        options
      );
      setCoin(coinData.data.coin);
    };
    fetchCoin();
  }, []);

  function addComma(x) {
    let number = (Math.round(x * 100)/100).toFixed(2)
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <section id="details" className="relative w-full h-[100vh] bg-gradient-to-t from-[#0f051d] to-[#130749] pt-[9.5rem] md:pt-[12rem] pb-[70rem] ss:pb-[50rem] md:pb-0">
      <div className="max-w-[130rem] mx-auto px-10 text-white">
        <div className="flex flex-col md:flex-row justify-center gap-10 items-center md:items-start">
          {/* logo and rank */}
          <div className="flex flex-col justify-center items-center capitalize border-b-2 md:border-b-0 md:border-r-2 border-[#f3f2f4] p-6 md:w-[30%]">
            <img src={coin.iconUrl} alt={coin.name} className="w-full h-[12rem] md:h-[15rem]"/>
            <h4 className="font-bold text-3xl mt-14 mb-4">
              {coin.name}
            </h4>
            <p className="text-lg font-semibold">
              rank: #
              {coin.rank}
            </p>
          </div>
          {/* text panel */}
          <div className="flex flex-col justify-center items-center md:items-start p-6 md:w-[70%]">
            {/* coin stats row */}
            <div className="flex flex-row justify-center md:justify-start flex-wrap gap-10 text-xl">
              <div className="flex whitespace-nowrap justify-center">
                <p className="font-semibold capitalize">
                  24H change:
                  <span className="text-red ml-2">
                    {coin.change}%
                  </span>
                </p>
              </div>
              <div className="flex whitespace-nowrap justify-center">
                <p className="font-semibold capitalize">
                  price:
                  <span className="text-green ml-2">
                    ${addComma(coin.price)}
                  </span>
                </p>
              </div>
              <div className="flex whitespace-nowrap justify-center">
                <p className="font-semibold capitalize">
                  symbol: <span className="ml-2">{coin.symbol}</span>
                </p>
              </div>
            </div>
            {/* coin description */}
            <div className="mt-[3rem] text-[1.25rem] text-center md:text-left font-semibold sm:w-[70%]">
              <p>
                {coin.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoinsDetail;
