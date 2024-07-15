import React from 'react'

export default function Hero() {
  return (
      <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto">
      
      <div className="flex flex-col gap-4">
      <p>IT S TIME TO GET</p>
      <h1 className="uppercase text-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Program<span className="text-blue-400 font-medium">Gym</span></h1>
      </div>

      <p>Lorem ipsum dolor sit amet consectetur <span className="text-blue-400 font-medium">adipisicing elit</span>. Deleniti dolores aperiam incidunt cum nisi <span className="text-blue-400 font-medium">eaque maiores nam obcaecati fugit sit, laborum</span> at iusto dolor, nemo quibusdam esse quo. Suscipit, ipsa.</p>
      <button className="px-8 py-4 rounded-md border-2 bg-slate  border-blue-solid blueShadow duration-2000"><p>Accepts & Begin</p></button>
    </div>
  )
}
