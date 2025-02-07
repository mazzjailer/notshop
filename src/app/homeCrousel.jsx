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
import { useRouter } from "next/navigation"

const HomeCrousel = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )
  const router = useRouter();

  return (
      <Carousel plugins={[plugin.current]}
      className="w-full h-[80vh]">
        <CarouselContent>
          <CarouselItem className="relative cursor-pointer" onClick={() => router.push(`/products/astro`)}>
            <Image src="/images/1.jpg" width={1000} height={1000} alt="Picture of the author" className="object-cover w-full h-[80vh]"/>
          </CarouselItem>
          <CarouselItem className="relative cursor-pointer" onClick={() => router.push(`/products/meteor`)}>
            <Image src="/images/20.jpg" width={1000} height={1000} alt="Picture of the author" className="object-cover w-full h-[80vh]" />
          </CarouselItem>
          <CarouselItem className="relative cursor-pointer" onClick={() => router.push(`/products/supernova`)}>
            <Image src="/images/16.jpg" width={1000} height={1000} alt="Picture of the author" className="object-cover w-full h-[80vh]" />
          </CarouselItem>
          <CarouselItem className="relative cursor-pointer" onClick={() => router.push(`/products/neptune`)}>
            <Image src="/images/8.jpg" width={1000} height={1000} alt="Picture of the author" className="object-cover w-full h-[80vh]" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="z-10 absolute left-6 bg-transparent border-none shadow-none hover:bg-[#FFEAC5]" />
        <CarouselNext className="z-10 absolute right-6 bg-transparent border-none shadow-none hover:bg-[#FFEAC5]" />
      </Carousel>
  )
}

export default HomeCrousel