
import {
  BsBuilding,
  BsChatLeftText,
  BsGear,
  BsHouseDoor,
  BsPerson,
  BsReverseLayoutTextSidebarReverse,
  BsWrench
} from 'react-icons/bs'
import { IMenuSidebarItem } from '.'

export const OPEN_SIDEBAR_SIZE = 'w-72'
export const CLOSE_SIDEBAR_SIZE = 'w-20'

export const homeMenuItems: IMenuSidebarItem[] = [
  {
    Icon: BsHouseDoor,
    name: 'Dashboard',
    href: ""
  },
  {
    Icon: BsWrench,
    name: 'Plugins',
    href: ""
  },
  {
    Icon: BsWrench,
    name: 'Tracker',
    href: ""
  }
]
