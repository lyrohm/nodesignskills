import { Sheet, SheetContent, SheetTrigger } from '@/_components/ui/sheet'
import { FC } from 'react'
import { BsList } from 'react-icons/bs'
import SideBar from '../Sidebar'

const NavBarSideBar: FC = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <BsList size='30' className='cursor-pointer lg:hidden' />
      </SheetTrigger>
      <SheetContent side='left'>
        <SideBar openedSidebar={true} />
      </SheetContent>
    </Sheet>
  )
}

export default NavBarSideBar
