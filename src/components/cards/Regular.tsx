import Image from 'next/image'

const RegularCard = () => {
  return (
    <>
      <div className='w-52 h-32 bg-gray-50'>
        <Image
          className='object-cover w-full h-full'
          src='/wpaot.jpg'
          alt='gambar'
          width={10000}
          height={10000}
        />
      </div>
    </>
  )
}

export default RegularCard
