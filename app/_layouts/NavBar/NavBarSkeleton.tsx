import { cn } from '@/_libs/utils'
import { FC } from 'react'
import { BsBell, BsChatLeftText, BsSearch } from 'react-icons/bs'

import AvatarDashboard from '@/_components/_commons/Avatar'
import NavBarTitle from './NavBarTitle'

type NavBarProps = {
  openedSidebar: boolean
}

const NavBarSkeleton: FC<NavBarProps> = ({ openedSidebar }) => {
  return (
    <nav className='dark:bg-dark-secondary dark:shadow-dark-secondary sticky top-0 z-10 flex w-full animate-pulse flex-row items-center  justify-between  border-b-4 bg-white px-6 py-5 shadow-lg'>
      <div
        className={cn(' border-orange-600 lg:ml-[290px]', {
          'lg:ml-[112px]': !openedSidebar
        })}
      >
        <NavBarTitle pathname='' />
      </div>
      <div className='flex flex-row gap-x-6'>
        <span className='text-md relative flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 font-medium'>
          <BsSearch className='text-xl' />
        </span>
        <span className='text-md relative flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 font-medium'>
          <BsChatLeftText className='text-xl' />
        </span>
        <span className='text-md relative flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 font-medium'>
          <BsBell className='text-xl' />
        </span>
        <div className='flex flex-row items-center justify-center space-x-4'>
          <AvatarDashboard image='' />
        </div>
      </div>
    </nav>
  )
}

export default NavBarSkeleton
