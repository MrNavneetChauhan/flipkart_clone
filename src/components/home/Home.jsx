import { Slider } from '../slider/Slider'
import React from 'react'
import { CarouselBar } from '../carousel/CarouselBar'
import { Navbar } from '../Navbar/Navbar'
import { Advertisement } from '../slider/Advertisement'


export const Home = () => {
  return (
    <div>
        <Navbar/>
        <CarouselBar/>
        <Slider showDiv={true} />
        <Advertisement/>
        <Slider showDiv={false} />
    </div>
  )
}
