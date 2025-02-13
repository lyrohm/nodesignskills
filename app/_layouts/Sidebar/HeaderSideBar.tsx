import { config } from '@/_config'
import { cn } from '@/_libs/utils'
import { FC } from 'react'
import { GoSidebarCollapse, GoSidebarExpand } from 'react-icons/go'
import { ISideBarProps } from '.'

interface IHeaderSideBarProps extends ISideBarProps {}

const HeaderSideBar: FC<IHeaderSideBarProps> = ({
  openedSidebar,
  handleSideBar
}) => {
  return (
    <header
      className={cn(
        'flex w-full flex-row items-center justify-between px-4 py-2',
        {
          'pt-[14px]': !openedSidebar
        }
      )}
    >
      <h1
        className={cn(
          ' flex flex-row items-center justify-center gap-x-2 text-3xl dark:text-white font-bold text-blue-700 p-2',
          {
            hidden: !openedSidebar
          }
        )}
      >
        {config.nameApp}
      </h1>
      <button className='hidden cursor-pointer text-3xl dark:text-white lg:block'>
        {openedSidebar ? (
          <GoSidebarExpand size={25} className='ml-2' onClick={handleSideBar} />
        ) : (
          <GoSidebarCollapse onClick={handleSideBar} />
        )}
      </button>
    </header>
  )
}

export default HeaderSideBar
