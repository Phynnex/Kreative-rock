import React, { useEffect, useState } from 'react';
import { ReactComponent as MarkIcon } from '../../../../../assets/images/mark-icon.svg';
import { ReactComponent as ContactIcon } from '../../../../../assets/images/contact-icon.svg';
import { ReactComponent as KebabMenuIcon } from '../../../../../assets/images/kebabmenu-icon.svg';
import { ReactComponent as ClockIcon } from '../../../../../assets/images/clock-icon.svg';
import { ReactComponent as SmileyIcon } from '../../../../../assets/images/smiley-icon.svg';
import { ReactComponent as ArchiveIcon } from '../../../../../assets/images/archive-icon.svg';
import { ReactComponent as AttachmentIcon } from '../../../../../assets/images/attachment-icon.svg';
import { inboxDetailsData } from './sampleData';
import avatarPlaceholder from '../../../../../assets/images/avatar-placeholder.png';
import { ReactComponent as BirthdayIcon } from '../../../../../assets/images/date-icon.svg';
import { ReactComponent as PhoneIcon } from '../../../../../assets/images/phone-icon.svg';
import { ReactComponent as EmailIcon } from '../../../../../assets/images/email-icon.svg';
import { getConversationsByPhoneNo, replyConversation } from 'services/conversationService';
import cogoToast from 'cogo-toast';
import { CircularProgress } from '@material-ui/core';

const InboxContent = ({ inboxId }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [conversation, setConversation] = useState()
  const [sms, setSms] = useState('')


  const handleDrawer = () => {
    setShowDrawer(showDrawer ? false : true);
  };


  useEffect(() => {
    getConversation()
    // eslint-disable-next-line
  }, [inboxId])

  const getConversation = async () => {
    const response = await getConversationsByPhoneNo(inboxId)
    setConversation(response)
  }

  

  const dateTimeHandler = (messageDate) => {
    let res

    const today = new Date()
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + ' ' + time;

    const date1 = new Date(messageDate)
    const date2 = new Date(dateTime)

    const diff = Math.abs(date2 - date1);
    //const diffInSec = diff / 1000
    const diffInMin = diff / (1000 * 60)
    const diffInHour = diff / (1000 * 60 * 60)
    //const diffInDay = diff / (1000 * 60 * 60 * 24)


    // if (diffInSec <= 60) {
    //   res = 'now'
    // }

    // if (diffInSec > 0 ) {
    //   res = `${Math.floor(diffInSec)} sec`
    // }

    if (diffInMin < 60) {
      res = `${Math.floor(diffInMin)} min`
    }

    if (diffInMin > 60) {
      res = `${Math.floor(diffInMin)} min`
    }

    if (diffInHour > 1) {
      res = `${Math.floor(diffInHour)} hrs`
    }

    if (diffInHour > 24) {
      res = `${date1.getFullYear()}/${(date1.getMonth() + 1)}/${date1.getDate()}`
    }

    return res
  }


  const handleSendSms = async () => {
    try {
      if (sms !== '') {
        let phoneNoFormat
        if (conversation?.payload?.phoneNumber.charAt(0).toString() === '+') {
          phoneNoFormat = conversation?.payload?.phoneNumber.substr(1)
        }
        const param = {
          phoneNumber: phoneNoFormat,
          message: sms
        }
        const response = await replyConversation(param)
        if (response.payload === 'message accepted') {
          getConversation()
        } else {
          cogoToast.warn("Failed to send")
        }
      }
    } catch (e) {
      cogoToast.warn("Something went wrong")
    }
  }



  const handleDisplay = () => {
    if (!conversation) {
      return (
        <div
          style={{ textAlign: 'center', padding: '2rem' }}
        >
          <CircularProgress size={25} />
        </div>
      )
    }

    if (conversation) {
      return contentDisplay()
    }
  }


  let firstName = inboxDetailsData.find((data) => data.id === inboxId)?.name;
  let phoneNumber = inboxDetailsData.find(
    (data) => data.id === inboxId
  )?.phone_number;
  let birthday = inboxDetailsData.find((data) => data.id === inboxId)?.birthday;
  let emailAddress = inboxDetailsData.find(
    (data) => data.id === inboxId
  )?.email_address;


  const contentDisplay = () => {
    if (conversation !== null) {
      return (
        <div className='inbox-details-chat-wrapper'>
          {conversation?.payload?.messages?.map((inbox) => {

            if (inbox.to !== inboxId) {
              return (
                <div>
                  <div className='inbox-details-chat-received'>
                    <div className='d-flex'>
                      <h2
                        className='inbox-details-h2'
                        style={{ marginRight: '14px' }}
                      >
                        {inbox?.from}
                      </h2>
                      <h4 className='inbox-details-h4'>
                        {dateTimeHandler(inbox?.date)}
                      </h4>
                    </div>
                    <p
                      className='inbox-content-paragraph'
                      style={{ color: '#918d8d' }}
                    >
                      {inbox?.message}
                    </p>
                  </div>
                </div>
              )
            }
            else {
              return (
                <div className='d-flex justify-content-end'>
                  <div className='inbox-details-chat-sent'>
                    <div className='d-flex'>
                      <h2
                        className='inbox-details-h2'
                        style={{ marginRight: '31px', color: 'white' }}
                      >
                        {'You'}
                      </h2>
                      <h4
                        className='inbox-details-h4'
                        style={{ color: 'white' }}
                      >
                        {dateTimeHandler(inbox?.date)}
                      </h4>
                    </div>
                    <p
                      className='inbox-content-paragraph'
                      style={{ color: 'white' }}
                    >
                      {inbox?.message}
                    </p>
                  </div>
                </div>
              )
            }
          })}
        </div>
      )
    }
  }



  return (
    <div style={{ display: showDrawer ? 'flex' : 'contents' }}>
      <div className='inbox-content-wrapper'>
        <div>
          <div className='inbox-details-header'>
            <div className='d-flex align-items-center'>
              <h2
                className='inbox-details-h2'
                style={{ marginRight: '18px' }}
              >
                {conversation?.payload?.phoneNumber}
              </h2>
              <h3 className='inbox-details-h4'>{phoneNumber}</h3>
            </div>
            <div className='d-flex align-items-center'>
              <MarkIcon style={{ marginRight: '24px' }} />
              <ContactIcon style={{ marginRight: '24px' }} />
              <button onClick={handleDrawer}>
                <KebabMenuIcon />
              </button>
            </div>
          </div>
          <div
            className='d-grid'
            style={{
              gridTemplateColumns: 'auto 110px auto',
              marginTop: '14px',
            }}
          >
            <div className='d-flex align-items-center'>
              <div className='inbox-details-new-message-vertical-divider'></div>
            </div>
            <h2 className='inbox-details-new-message-h2' style={{ textAlign: 'center' }}> Message</h2>
            <div className='d-flex align-items-center'>
              <div className='inbox-details-new-message-vertical-divider'></div>
            </div>
          </div>

          {handleDisplay()}
          <div className='inbox-details-border-bottom-divider'></div>
          <div className='inbox-details-response-wrapper'>
            <h3 className='inbox-details-response-h3'>Message</h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto max-content',
              }}
            >
              <input
                type='text'
                placeholder='Write your message..........'
                name=''
                id=''
                onChange={(e) => setSms(e.target.value)}
              />
              <div>
                <ClockIcon style={{ marginRight: '8px' }} />
                <button
                  className='inbox-details-response--btn'
                  onClick={handleSendSms}
                >
                  Send Sms
                </button>
              </div>
            </div>
            <div>
              <SmileyIcon style={{ marginRight: '13px' }} />
              <ArchiveIcon style={{ marginRight: '14px' }} />
              <AttachmentIcon />
            </div>
          </div>
        </div>
      </div>
      {showDrawer && (
        <div
          style={{
            width: '219px',
            paddingTop: '26px',
          }}
          className='inbox-drawer'
        >
          <span className='inbox-drawer-close-icon' onClick={() => setShowDrawer(false)}>&#10005;</span>
          <h2 style={{ marginLeft: '20px' }} className='inbox-drawer--h2'>
            Edit Contact
          </h2>
          <div style={{ marginLeft: '20px' }} className='d-flex'>
            <img width='41px' height='41px' src={avatarPlaceholder} alt='' />
            <h3 style={{ marginLeft: '10px' }} className='inbox-drawer--h3'>
              {firstName}
            </h3>
          </div>
          <div
            style={{ marginLeft: '12px', marginTop: '36px' }}
            className='d-flex'
          >
            <BirthdayIcon style={{ marginRight: '10px' }} />
            <p className='inbox-drawer--p'>{birthday}</p>
          </div>
          <div style={{ marginLeft: '11px' }} className='d-flex'>
            <PhoneIcon style={{ marginRight: '10px' }} />
            <p className='inbox-drawer--p'>{phoneNumber}</p>
          </div>
          <div style={{ marginLeft: '11px' }} className='d-flex'>
            <EmailIcon style={{ marginRight: '10px' }} />
            <p className='inbox-drawer--p'>{emailAddress}</p>
          </div>
          <h3 style={{ marginLeft: '22px' }} className='inbox-drawer--h3'>
            Lists
          </h3>
          <div className='d-flex' style={{ marginLeft: '4px' }}>
            <button
              className='inbox-drawer--btn'
              style={{ marginRight: '8px' }}
            >
              Custom
            </button>
            <button className='inbox-drawer--btn'>Employ</button>
          </div>
          <h3
            style={{ marginLeft: '22px', marginTop: '14px' }}
            className='inbox-drawer--h3'
          >
            Birthday
          </h3>
          <p
            style={{ marginLeft: '24px', marginBottom: '10px' }}
            className='inbox-drawer--p'
          >
            {birthday}
          </p>
          <h3 style={{ marginLeft: '22px' }} className='inbox-drawer--h3'>
            Note
          </h3>
        </div>
      )}
    </div>
  );
};

export default InboxContent;
