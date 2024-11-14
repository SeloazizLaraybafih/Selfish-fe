import Link from 'next/link'

export default function Header() {
  return (
    <header
      className='fixed top-0 left-0 w-full z-10'
      style={{ padding: '1rem', backgroundColor: '#ffffff0', color: 'white' }}
    >
      <nav>
        <div className='pl-20 pt-3 flex justify-between w-[30rem]'>
          <Link href='/' passHref>
            <p className='text-white font-bold'>Home</p>
          </Link>
          <Link href='/top10' passHref>
            <p className='text-white font-bold'>Categories</p>
          </Link>
          <Link href='/' passHref>
            <p className='text-white font-bold'>Forum</p>
          </Link>
        </div>
      </nav>
    </header>
  )
}
