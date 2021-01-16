import React from 'react'
import './SendMail.scss'
import { Close } from '@material-ui/icons'
import { Button } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage, openSendMessage } from '../../features/mailSlice'
import { db } from '../../firebase'
import firebase from 'firebase'

const SendMail = () => {
  const dispatch = useDispatch()
  const {register, handleSubmit,watch,errors} = useForm()

  const onSubmit = (formData) => {
    console.log(formData)
    db.collection('emails').add({
      to:formData.to,
      subject:formData.subject,
      message:formData.message,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
    dispatch(closeSendMessage())
  }
  return (
    <div className={'sendMail'}>
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close className={'sendMail__close'} onClick={()=> dispatch(closeSendMessage())}/>
      </div>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input name={'to'} placeholder={'To'} type="text" ref={register({required:true})}/>
        {errors.to && <p className={'sendMail__error'}>To is required!</p>}
        <input name={'subject'} placeholder={'Subject'} type="text" ref={register({required:true})}/>
        {errors.subject && <p className={'sendMail__error'}>Subject is required!</p>}
        <input name={'message'} placeholder={'Message...'}type="text" className={'sendMail__message'} ref={register({required:true})}/>
        {errors.message && <p className={'sendMail__error'}>Message is required!</p>}

        <div className="sendMail__options">
          <Button className={'sendMail__send'} variant={'contained'} color={'primary'} type={'submit'}>Send</Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail
