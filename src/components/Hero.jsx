import React from 'react'
import bitcoinImg from '../assets/bitcoin.png'
import ethereumImg from '../assets/ethereum.png'
import {Link} from 'react-router-dom'

const Hero = ({coins}) => {
  return (
    <section id='hero' className='relative w-full h-[100vh] bg-gradient-to-t from-[#0f051d] to-[#130749] pt-[10.5rem]'>
      <div className='max-w-[130rem] mx-auto px-10'>
        <div className="flex flex-col justify-center items-center">
          <div className="relative">
            <img src={bitcoinImg} alt="bitcoin" className='hidden md:block absolute top-[0.75rem] left-[-2.5rem] w-[4.5rem] h-[4.5rem] lg:left-[-3.5rem] animate-bounce' />
            <h1 className='font-bold text-primary text-5xl xs:text-6xl sm:text-8xl text-center uppercase'>
              track and trade <br />
              <span className="text-gradient1">
                crypto currencies
              </span>
            </h1>
            <img src={ethereumImg} alt="ethereum" className='hidden md:block absolute top-[0.75rem] right-[-2.5rem] w-[4.5rem] h-[4.5rem] lg:right-[-3.5rem] animate-bounce' />
          </div>
          <a href="#market" className="text-primary flex items-center justify-center ss:hidden rounded-[10rem] text-[1.5rem] font-semibold gap-[0.7rem] mt-[3rem] py-3 px-8 mx-auto tex-center transition-all duration-200 w-[15rem] bg-gradient-to-tr from-text_gradient_start to-text_gradient_end">
            See Prices <i className="fa-solid fa-angle-down"></i>
          </a>
          <div className='hidden ss:grid ss:grid-cols-2 sm:flex text-center text-primary my-12 gap-10'>
            {coins.slice(0,4).map((coin) => (
              <Link to={`/coins/${coin.uuid}`} key={coin.uuid} className="flex flex-col items-center">
                <img src={coin.iconUrl} alt={coin.name} className='w-[6rem] h-[6rem] mb-3' />
                <h4 className='font-bold text-[1.35rem] text-center'>
                  {coin.name}
                  <span className='text-red text-2xl ml-2'>
                    {coin.change}%
                  </span>
                </h4>
                <h4 className='font-bold text-[1.35rem]'>
                  ${" "}
                  {(Math.round(coin.price * 100)/100).toFixed(2)}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero