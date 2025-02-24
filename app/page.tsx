import { HEADLINE, SUBHEADLINE } from './_data/constants/commonConstants'

export default function Home() {
  return (
    <main className='row-start-2 flex flex-col items-center gap-8 sm:items-start'>
      <div className='mx-auto flex h-screen w-full flex-row text-black 3xl:w-[1920px]'>
        <div className='items-left flex w-1/2 flex-col justify-center space-y-6 border-2 border-red-500 px-10 3xl:space-y-8'>
          <h1 className='text-2xl font-bold 3xl:text-3xl'>{HEADLINE}</h1>
          <p
            className='text-lg 3xl:text-xl'
            dangerouslySetInnerHTML={{ __html: SUBHEADLINE }}
          ></p>
        </div>
        <div className='w-1/2 border-2 border-green-500'>dsfsdf</div>
      </div>
    </main>
  )
}
