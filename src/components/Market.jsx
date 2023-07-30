import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Market = ({ coins }) => {
  // filtering feature for future
  const filteredList = coins.filter((coin) => {
    return coin.change <= -1;
  });

  // new
  const itemsPerPage = 10;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = coins.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(coins.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % coins.length;
    setItemOffset(newOffset);
    window.scrollTo({ top: 500 });
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <section
      id="market"
      className="bg-bg_color ss:mt-[15rem] sm::mt-[12rem] md:mt-[3rem]"
    >
      <div className="max-w-[130rem] mx-auto px-4 xs:px-10 lg:px-28">
        <div className="flex flex-col items-start">
          <h2 className="font-bold text-primary text-[2rem] xs:text-[2.75rem] mb-3 lg:ml-1">
            Market Update
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 text-right bg-gradient-to-r from-text_gradient_start to-text_gradient_end w-full rounded-t-xl p-4 font-semibold text-xl gap-4 text-primary justify-center items-center">
            <p className="text-left">Coin</p>
            <p>Price</p>
            <p>24h Change</p>
            <p className="hidden sm:block">Market Cap</p>
          </div>
          <div className="flex flex-col w-full">
            {currentItems.map((coin) => (
              <Link
                to={`/coins/${coin.uuid}`}
                key={coin.uuid}
                className="grid grid-cols-3 sm:grid-cols-4 text-right w-full p-4 cursor-pointer hover:bg-violet-700 hover:bg-opacity-25 font-semibold text-xl gap-1 sm:gap-4 text-primary justify-center items-center border-b-[1px] border-[#f3f4f5]"
              >
                <div className="flex flex-row gap-4 text-left items-center">
                  <img
                    src={coin.iconUrl}
                    alt={coin.name}
                    className="w-[3rem] h-[3rem]"
                    loading="lazy"
                  />
                  <p className="hidden xs:block">{coin.name}</p>
                </div>
                <p>
                  $&nbsp;
                  {(Math.round(coin.price * 100) / 100).toFixed(2)}
                </p>
                <p className="text-red"> {coin.change}&nbsp;% </p>
                <p className="hidden sm:block">
                  ${numberWithCommas(coin.marketCap)}
                </p>
              </Link>
            ))}
          </div>
        </div>
        {/* Pagination Container */}
        <div className="flex flex-row justify-center items-center mt-20 rounded-b-xl py-3">
          <ReactPaginate
            breakLabel="..."
            nextLabel=""
            onPageChange={handlePageClick}
            pageRangeDisplayed={-1}
            pageCount={pageCount}
            previousLabel=""
            renderOnZeroPageCount={null}
            containerClassName="flex gap-6 text-2xl text-white justify-center my-3"
            pageClassName="bg-slate-400 px-5 py-3 rounded-full bg-primary text-bg_color"
            activeClassName="bg-gradient-to-t from-text_gradient_start to-text_gradient_end border-s"
            activeLinkClassName="text-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default Market;
