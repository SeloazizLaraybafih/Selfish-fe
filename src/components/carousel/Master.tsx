import Image from 'next/image'
// import RegularCard from '../cards/Regular'
const MasterCarousel = () => {
  return (
    <>
      <div className='flex justify-center bg-gray-800'>
        <div className='container-div w-[100%] overflow-hidden opacity-70 relative'>
          <Image
            className='object-contain w-full h-auto'
            src='/bgaot1.jpg'
            alt='gambar'
            width={10000}
            height={10000}
          />
          <div className='divText w-60 h-40 absolute bottom-10 left-40'>
            <p className='text-white text-2xl font-bold stroke-inherit'>
              Attack on Titan part 4: Episode 2: part 3: part 2
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MasterCarousel
