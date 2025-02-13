'use client'

import { FC } from 'react'
import uniqid from 'uniqid'
import { IMenuSidebarItem } from '../..'
import MenuSidebarItem from './MenuSidebarItem'

interface IMenuSidebarProps {
  openedSidebar?: boolean
  items: IMenuSidebarItem[]
}

const MenuSidebar: FC<IMenuSidebarProps> = ({
  openedSidebar,
  items
}) => {

  const getMenuSidebarItem = (item: IMenuSidebarItem) => {
    return (
      <MenuSidebarItem key={uniqid()} {...item} openedSidebar={openedSidebar} />
    )
  }

  return (
    <ul className='text-lg'>
      {items.map((item: IMenuSidebarItem) => {
        if (!item.entityType) return getMenuSidebarItem(item)
      })}
    </ul>
  )
}

export default MenuSidebar
