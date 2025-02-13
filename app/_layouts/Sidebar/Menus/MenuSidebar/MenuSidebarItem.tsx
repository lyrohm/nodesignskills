'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { IMenuSidebarItem } from '../..'

interface IMenuSidebarItemProps extends IMenuSidebarItem {
  openedSidebar?: boolean
}

const MenuSidebarItem: FC<IMenuSidebarItemProps> = ({
  Icon,
  name,
  href,
  openedSidebar
}) => {
  const pathname = usePathname()
  return (
    <li
      className={`hover:bg-light-third dark:hover:bg-dark-secondary group hover:rounded-2xl hover:font-bold ${
        pathname === href
          ? 'bg-light-third dark:bg-dark-secondary rounded-2xl font-bold'
          : ''
      }`}
    >
      <Link
        href={href}
        className='dark:text-dark-text flex flex-row items-center justify-start gap-5 p-4 group-hover:dark:text-white'
      >
        <Icon className='text-2xl group-hover:animate-bounce' />
        <span
          className={`first-letter:uppercase  ${
            openedSidebar ? 'block' : 'hidden'
          }`}
        >
          {name}
        </span>
      </Link>
    </li>
  )
}

export default MenuSidebarItem
