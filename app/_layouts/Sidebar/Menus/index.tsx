'use client'

import { FC, useEffect, useRef, useState } from 'react'
import { homeMenuItems } from '../constants'
import MenuSidebar from './MenuSidebar'

export interface IMenusProps {
  openedSidebar: boolean
}

const Menus: FC<IMenusProps> = ({ openedSidebar }) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [hasScrollbar, setHasScrollbar] = useState<boolean>(false)

  useEffect(() => {
    const scollbar =
      Number(containerRef?.current?.scrollHeight) >
      Number(containerRef?.current?.clientHeight)
    setHasScrollbar(scollbar)
  }, [])

  return (
    <div
      ref={containerRef}
      className={`relative mb-10 mt-5 flex-auto overflow-y-auto ${
        hasScrollbar ? 'border-b-4 border-slate-500/40' : ''
      }`}
    >
      <MenuSidebar
        openedSidebar={openedSidebar}
        items={homeMenuItems}
      />
      {/* <hr className='border-1 my-6 border-gray-300' /> */}
    </div>
  )
}

export default Menus
