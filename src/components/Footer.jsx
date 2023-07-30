import React from 'react'

const Footer = () => {
  return (
    <footer className='footer-with-img text-primary'>
      <div className='flex gap-8 text-2xl mb-4'>
        <i className="fa-brands fa-twitter text-3xl cursor-pointer hover:text-gradient"></i>
        <i className="fa-brands fa-discord text-3xl cursor-pointer hover:text-gradient"></i>
        <i className="fa-brands fa-facebook text-3xl cursor-pointer hover:text-gradient"></i>
        <i className="fa-brands fa-youtube text-3xl cursor-pointer hover:text-gradient"></i>
      </div>
      <div className='flex space-x-4 capitalize cursor-pointer'>
        <span>this website depends on coinRanking for presenting the market data</span>
      </div>
      <div className='flex items-center space-x-2 capitalize cursor-pointer mt-12'>
      <i className="fa-brands fa-linkedin text-lg"></i>
        <a rel='noopener author external' href="https://www.linkedin.com/in/devar-dilshad-81196a24a/" className='underline'>
          devar
        </a>
      </div>
    </footer>
  )
}

export default Footer