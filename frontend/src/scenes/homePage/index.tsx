import React from 'react';
import { useCustomSelector } from "../../hooks/redux";
const zapatos = require('../../assets/1.jpg')
const zapatos1 = require('../../assets/2.jpg')
const zapatos2 = require('../../assets/3.jpg')

type Props = {}

const HomePage = (props: Props) => {

  const { auth } = useCustomSelector((state) => state)
  const isColor = auth.mode

  return (
    <>
      <div className={`py-16 bg-${isColor}`}>
        <div  className="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
          <div className="justify-center text-center gap-6 md:text-left md:flex lg:items-center  lg:gap-16">
              <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
                  <h1 className={`text-4xl ${isColor === "dark" ? "text-white" : "text-gray-700"} font-bold md:text-5xl`}>Buy now and benefit up to <span className="text-blue-500">30% off</span></h1>
                  <p className="text-lg">Be part of millions people around the world using tailus in modern User Interfaces.</p>
                  <div className="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
                    <a href='shop'>
                      <button type="button" title="Start buying" className="w-full py-3 px-6 text-center rounded-xl transition bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max">
                          <span className="block text-white font-semibold">
                              Start buying
                          </span>
                      </button>
                    </a>
                  </div>
              </div>
              <div className="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
                  <div className="col-span-2 row-span-4">
                      <img src={zapatos} className="rounded-full" width="640" height="960" alt="shoes" loading="lazy" />
                  </div>
                  <div className="col-span-2 row-span-2">
                      <img src={zapatos1} className="w-full h-full object-cover object-top rounded-xl" width="640" height="640" alt="shoe" loading="lazy" />
                  </div>
                  <div className="col-span-3 row-span-3">
                      <img src={zapatos2} className="w-full h-full object-cover object-top rounded-xl" width="640" height="427" alt="shoes" loading="lazy" />
                  </div>
              </div>
          </div>
      </div>
    </div>
    <section className={`bg-${isColor} dark:bg-gray-500`}>
        <div className="container px-6 py-10 mx-auto">
            <h1 className={`text-3xl font-semibold capitalize lg:text-4xl ${isColor === "dark" ? "text-white" : "text-gray-500"}`}>NOBULL Experience</h1>

            <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://games-assets.crossfit.com/s3fs-public/styles/hero/public/JS_E4-8607%20%282%29.jpg?itok=QSnHnF9R"alt="" />

                <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                    <p className="text-sm text-blue-500 uppercase">category</p>

                    <p className={`block mt-4 text-2xl font-semibold ${isColor === "dark" ? "text-white" : "text-blue-500"} md:text-3xl`}>
                      To get there you have to try
                    </p>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                        laudantium quia tempore delect
                    </p>

                    <div className="flex items-center mt-6">
                        <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                        <div className="mx-4">
                            <h1 className={`text-sm ${isColor === "dark" ? "text-gray-200" : "text-gray-700"}`}>Amelia. Anderson</h1>
                            <p className={`text-sm ${isColor === "dark" ? "text-gray-400" : "text-gray-500"}`}>Lead Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
  )
}

export default HomePage