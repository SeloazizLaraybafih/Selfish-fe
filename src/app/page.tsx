import Header from '@/components/Header'
import CardsSwiper from '@/components/carousel/CardsSwiper'
import MasterCarousel from '@/components/carousel/Master'

export default function Home() {
  return (
    <>
      <div>
        {' '}
        <Header></Header>
        <MasterCarousel></MasterCarousel>
        <CardsSwiper></CardsSwiper>
      </div>
    </>
  )
}
