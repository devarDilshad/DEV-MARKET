import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Market from "../components/Market";
import ChooseUs from "../components/ChooseUs";
import JoinUs from "../components/JoinUs";
import { fetchData, options } from "../utils/fetchData";

const Home = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const fetchCoins = async () => {
      const coinsData = await fetchData(
        "https://coinranking1.p.rapidapi.com/coins",
        options
      );
      setCoins(coinsData.data.coins);
    };
    fetchCoins();
  }, []);

  return (
    <div className="bg-bg_color" id="home">
      {coins ? (
        <>
          <Hero coins={coins} />
          <Market coins={coins} />
          <ChooseUs />
          <JoinUs />
        </>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default Home;
