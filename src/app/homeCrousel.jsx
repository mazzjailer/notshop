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
import { useProducts } from "@/contexts/productsContext"

const HomeCrousel = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )
  const { products } = useProducts();

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const router = useRouter();

  return (
    <Carousel plugins={[plugin.current]}
      className="w-full h-[80vh]">
      <CarouselContent>
      {
        shuffleArray(products).slice(0, 5).map((product) => (
          <CarouselItem key={product.id} className="relative cursor-pointer" onClick={() => router.push(`/products/${product.slug}`)}>
            <Image src={product.images[0]} width={1000} height={1000} alt={product.name} className="object-cover w-full h-[80vh]"/>
          </CarouselItem>
          )
        )
      }
      </CarouselContent>
      <CarouselPrevious className="z-10 absolute left-6 bg-transparent border-none shadow-none hover:bg-[#FFEAC5]" />
      <CarouselNext className="z-10 absolute right-6 bg-transparent border-none shadow-none hover:bg-[#FFEAC5]" />
    </Carousel>
  )
}

export default HomeCrousel