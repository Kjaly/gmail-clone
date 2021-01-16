import React from 'react'
import './Header.scss'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { Avatar } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'

const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout())
    })
  }


  return (
    <div className={'header'}>
      <div className="header__left">
        <IconButton>
          <MenuIcon/>
        </IconButton>
        <img src="https://www.google.com/gmail/about/static/images/logo-gmail.png?cache=1adba63" alt=""/>

      </div>

      <div className="header__middle">
        <SearchIcon/>
        <input placeholder={'Search mail'} type="text"/>
        <ArrowDropDownIcon className={'header__inputCaret'}/>
      </div>

      <div className="header__right">
        <IconButton>
          <AppsIcon/>
        </IconButton>
        <IconButton>
          <NotificationsIcon/>
        </IconButton>
        <IconButton>
          <Avatar onClick={signOut} src={user?.photoUrl}/>
        </IconButton>
      </div>
    </div>
  )
}

export default Header
