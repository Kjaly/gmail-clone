import React from 'react'
import './Mail.scss'
import { IconButton } from '@material-ui/core'
import {
  ArrowBack,
  CheckCircle,
  Delete,
  Email,
  Error, ExitToApp,
  LabelImportant, MoreVert,
  MoveToInbox, Print, UnfoldMore,
  WatchLater
} from '@material-ui/icons'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import { selectMail, selectOpenMail } from '../../features/mailSlice'

const Mail = () => {
  const history = useHistory()
  const selectedMail = useSelector(selectOpenMail)

  return (
    <div className={'mail'}>
      <div className="mail__tools">
        <div className="mail__tollsLeft">
          <IconButton onClick={()=>history.push('/')}>
            <ArrowBack/>
          </IconButton>
          <IconButton>
            <MoveToInbox/>
          </IconButton>
          <IconButton>
            <Error/>
          </IconButton>
          <IconButton>
            <Delete/>
          </IconButton>
          <IconButton>
            <Email/>
          </IconButton>
          <IconButton>
            <WatchLater/>
          </IconButton>
          <IconButton>
            <CheckCircle/>
          </IconButton>
          <IconButton>
            <LabelImportant/>
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
        <div className="mail__tollsRight">
          <IconButton>
            <UnfoldMore/>
          </IconButton>
          <IconButton>
            <Print/>
          </IconButton>
          <IconButton>
            <ExitToApp/>
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>{selectedMail?.subject}</h2>
          <LabelImportant className={'mail__important'}/>
          <p>{selectedMail?.title}</p>
          <p className={'mail__time'}>{selectedMail?.time}</p>
        </div>
        <div className="mail__message">
          {selectedMail?.description}
        </div>
      </div>
    </div>
  )
}

export default Mail
