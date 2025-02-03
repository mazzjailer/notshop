'use client'
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"
import Image from 'next/image'
import { useRef } from "react"

const HomeCrousel = () => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
      <Carousel plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="w-full h-[80vh]">
        <CarouselContent>
          <CarouselItem>
            <Image src="/images/1.jpg" width={500} height={500} alt="Picture of the author" className="object-cover w-full h-[80vh]"/>
          </CarouselItem>
          <CarouselItem className=" relative">
            <Image src="/images/2.jpg" width={500} height={500} alt="Picture of the author" className="object-cover w-full h-[80vh]" />
          </CarouselItem>
          <CarouselItem className=" relative">
            <Image src="/images/3.jpg" width={500} height={500} alt="Picture of the author" className="object-cover w-full h-[80vh]" />
          </CarouselItem>
          <CarouselItem className=" relative">
            <Image src="/images/4.jpg" width={500} height={500} alt="Picture of the author" className="object-cover w-full h-[80vh]" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="z-10 absolute left-6 bg-transparent border-none shadow-none hover:bg-[#FFEAC5]" />
        <CarouselNext className="z-10 absolute right-6 bg-transparent border-none shadow-none hover:bg-[#FFEAC5]" />
      </Carousel>
  )
}

export default HomeCrousel