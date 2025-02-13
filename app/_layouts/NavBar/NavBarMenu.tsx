import { cn } from '@/_libs/utils'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger
} from '@radix-ui/react-menubar'
import Link from 'next/link'
import { FC } from 'react'
import { BsFillCaretDownFill } from 'react-icons/bs'

type NavBar = { title: string; href?: string; buttonSignout?: boolean }
type NavBarMenu = { title: string; menu: NavBar[] }

type NavBarMenuProps = {
  items: NavBarMenu
  className?: string
}

const NavBarMenu: FC<NavBarMenuProps> = ({ items, className }) => {
  return (
    <Menubar className={cn(className)}>
      <MenubarMenu>
        <MenubarTrigger className='flex max-w-28 flex-row items-center justify-center gap-x-2 text-wrap font-semibold'>
          {/* {items.title} */} <BsFillCaretDownFill className='text-omedema' />{' '}
        </MenubarTrigger>
        <MenubarContent className='z-50 rounded-md border-2 border-gray-200 bg-white p-4'>
          <MenubarItem className='p-2 text-gray-400'>{items.title}</MenubarItem>
          {items.menu.map(item => (
            <MenubarItem
              key={item.title}
              className='p-2 hover:border-0 focus:border-omedema focus:bg-omedema/60'
            >
              {item.href && <Link href={item.href}>{item.title}</Link>}
              {item.buttonSignout && (
                <button onClick={() => signOut()}>{item.title}</button>
              )}
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default NavBarMenu
