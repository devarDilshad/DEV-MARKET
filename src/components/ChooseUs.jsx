import React from 'react'
import { chooseUs } from '../constants/index'

const ChooseUs = () => {
  return (
    <section id='choose_us' className='py-[10rem]'>
      <div className="max-w-[130rem] mx-auto px-10">
        <div className="flex flex-col justify-center items-center text-primary">
          <h2 className='font-bold font-sans text-[4.4rem] uppercase text-center'>
            why <span className="text-gradient1">choose us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-[3rem] my-12">
            {chooseUs.map((item) => (
              <div key={item.id} className="flex justify-start py-6 px-4 w-full gap-4 bg-slate-900 bg-opacity-30 border-slate-800 border-[1px] rounded-[20px]">
                <i className={`${item.icon} text-[1.75rem] sm:text-4xl bg-gradient-to-t from-text_gradient_start to-text_gradient_end p-4 rounded-2xl h-[4.25rem] text-center`}></i>
                <div className='font-semibold space-y-1'>
                  <h4 className='text-xl sm:text-2xl'>
                    {item.title}
                  </h4>
                  <p>
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChooseUs