import { cn } from '@/_libs/utils'
import { FC } from 'react'
import { IconType } from 'react-icons'
import HeaderSideBar from './HeaderSideBar'
import Menus from './Menus'
import { CLOSE_SIDEBAR_SIZE, OPEN_SIDEBAR_SIZE } from './constants'

export interface IMenuSidebarItem {
  Icon: IconType
  name: string
  href: string
}

export interface ISideBarProps {
  openedSidebar: boolean
  handleSideBar?: () => void
  className?: string
}

const Sidebar: FC<ISideBarProps> = ({
  openedSidebar,
  handleSideBar,
  className
}) => {

  const openSidebarSize = OPEN_SIDEBAR_SIZE
  const closeSidebarSize =  CLOSE_SIDEBAR_SIZE

  return (
    <div
      className={cn(
        `lg:translate bg-white px-6 pt-[14px] lg:fixed lg:bottom-0 lg:left-0 lg:z-20 lg:flex lg:h-full lg:flex-col lg:justify-between lg:duration-300 lg:${closeSidebarSize} xl:w-72
      ${openedSidebar ? `xl:${openSidebarSize} ` : `xl:${closeSidebarSize}`}
    `,
        className
      )}
    >
      <HeaderSideBar
        openedSidebar={openedSidebar}
        handleSideBar={handleSideBar}
      />
      <Menus openedSidebar={openedSidebar} />
    </div>
  )
}

export default Sidebar
