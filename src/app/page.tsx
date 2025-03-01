import { Search } from 'lucide-react'
import Header from './components/Header'
export default function Home() {
  return (
    <>
      <Header />
      <div className='bg-[url("/images/home-img.png")] bg-cover bg-center min-h-svh rounded-2xl flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center gap-8 w-[640px] text-center'>
          <button className='px-10 py-2.5 text-zinc-50 font-normal text-2xl border border-zinc-50 rounded-full'>
            LET US GUIDE YOUR HOME
          </button>
          <h1 className='text-6xl text-zinc-50 font-bold'>
            {"Discover a place you'll love to live"}
          </h1>
          <div className='w-full'>
            <div className='w-full flex relative'>
              <input
                className='w-full h-[70px] bg-zinc-50 rounded-full px-4 py-2.5 outline-0'
                type='search'
                name='search'
                id='search'
                placeholder='Enter Name, Keywords...'
              />
              <button className='w-[60px] h-[60.5px] bg-amber-400  px-4 py-2 rounded-[500%] absolute right-1 top-[5px]'>
                <Search strokeWidth={1} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
