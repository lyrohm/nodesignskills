import { getAppTItle } from '@/_libs/utils'
import { FC } from 'react'

type NavBarTitleProps = {
  pathname: string
}

const NavBarTitle: FC<NavBarTitleProps> = ({ pathname }) => {
  return (
    <h1 className='pl-2 text-2xl font-semibold tracking-wider first-letter:uppercase'>
      {getAppTItle(pathname)}
    </h1>
  )
}

export default NavBarTitle
