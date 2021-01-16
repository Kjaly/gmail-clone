import React, { useEffect, useState } from 'react'
import './EmailList.scss'
import { Checkbox, IconButton } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import RedoIcon from '@material-ui/icons/Redo'
import { ChevronLeft, ChevronRight, KeyboardHide, LocalOffer, People, Settings } from '@material-ui/icons'
import InboxIcon from '@material-ui/icons/Inbox'
import Section from '../Section/Section'
import EmailRow from './EmailRow/EmailRow'
import { db } from '../../firebase'

const EmailList = () => {

  const [emails, setEmails] = useState([])



  useEffect(() => {
    db.collection('emails')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot =>
        setEmails(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          }))
        )
      )
  }, [])
  console.log(emails)
  return (
    <div className={'emailList'}>
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox/>
          <IconButton>
            <ArrowDropDownIcon/>
          </IconButton>
          <IconButton>
            <RedoIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft/>
          </IconButton>
          <IconButton>
            <ChevronRight/>
          </IconButton>
          <IconButton>
            <KeyboardHide/>
          </IconButton>
          <IconButton>
            <Settings/>
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={InboxIcon} title={'Primary'} color={'red'} selected/>
        <Section Icon={People} title={'Social'} color={'#1a73e8'}/>
        <Section Icon={LocalOffer} title={'Promotions'} color={'green'}/>
      </div>

      <div className="emailList__list">
        {emails.map(({id,data:{to,subject,message,timestamp}})=>(
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds*1000).toUTCString()}
          />
        ))}
        <EmailRow
          title={'Twitch'}
          subject={'hey follow streamer!'}
          description={'This is a test'}
          time={'10pm'}
        />

      </div>
    </div>
  )
}

export default EmailList
