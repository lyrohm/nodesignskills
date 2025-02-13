'use client'

import AvatarDashboard from '@/_components/_commons/Avatar'
import { cn } from '@/_libs/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { BsBell, BsChatLeftText, BsSearch } from 'react-icons/bs'
import NavBarMenu from './NavBarMenu'
import NavBarSideBar from './NavBarSideBar'
import NavBarTitle from './NavBarTitle'

type NavBarProps = {
  openedSidebar: boolean
}

const NavBar: FC<NavBarProps> = ({ openedSidebar }) => {
  const pathname = usePathname()

  return (
    <nav className='dark:bg-dark-secondary dark:shadow-dark-secondary sticky top-0 z-10 flex w-full flex-row items-center justify-between border-b-4 bg-white px-6 py-5 shadow-lg'>
      <div
        className={cn(
          'flex flex-row items-center space-x-5 lg:ml-[290px] lg:space-x-4 xl:space-x-10',
          {
            'lg:ml-[112px]': !openedSidebar
          }
        )}
      >
        <NavBarSideBar />
        {/* <NavBarTitle pathname={pathname} /> */}
        <div className="flex flex-col gap-y-2 xl:flex-row xl:gap-x-6">
          <div className={cn('')}>
            <span className={cn('font-medium')}>URL: </span> 
            <span className={cn('text-blue-500')}><b>https://fronteupp2.cube-net.pub/fr/</b></span> 
          </div>
          <div className={cn('font-normal')}>
            Version Update: <b>0</b>
          </div>
        </div>
      </div>
      <div className='flex flex-row gap-x-2'>
        <span className='text-md relative flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 font-medium'>
          <BsSearch className='text-xl' />
        </span>
        <span className='text-md relative flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 font-medium'>
          <BsBell className='text-xl' />
        </span>
        <div className='flex flex-row items-center justify-center space-x-2'>
          <AvatarDashboard />
          <NavBarMenu
            className='mt-2'
            items={{
              title: 'john doe',
              menu: [
                { title: 'Settings', href: "" },
                { title: 'Logout', buttonSignout: true }
              ]
            }}
          />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
