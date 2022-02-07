import React from 'react';
import { ReactComponent as MarkIcon } from '../../../../../assets/images/mark-icon.svg';
import { ReactComponent as ContactIcon } from '../../../../../assets/images/contact-icon.svg';
import { ReactComponent as KebabMenuIcon } from '../../../../../assets/images/kebabmenu-icon.svg';
import { ReactComponent as ClockIcon } from '../../../../../assets/images/clock-icon.svg';
import { ReactComponent as SmileyIcon } from '../../../../../assets/images/smiley-icon.svg';
import { ReactComponent as ArchiveIcon } from '../../../../../assets/images/archive-icon.svg';
import { ReactComponent as AttachmentIcon } from '../../../../../assets/images/attachment-icon.svg';
import { inboxDetailsData } from './sampleData';

const InboxContent = ({ inboxId }) => {
  let firstName = inboxDetailsData.find((data) => data.id === inboxId)?.name;
  let phoneNumber = inboxDetailsData.find(
    (data) => data.id === inboxId
  )?.phone_number;
  return (
    <div className='inbox-content-wrapper'>
      {inboxId === 0 ? (
        <div
          className='d-flex align-items-center justify-content-center'
          style={{ height: '100%' }}
        >
          <div className='d-block text-center'>
            <h2 className='inbox-content-new-conversation--h2'>
              Please select a conversation or creat new one{' '}
            </h2>
            <button className='inbox-content-new-conversation--btn'>
              New Conversation
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className='inbox-details-header'>
            <div className='d-flex align-items-center'>
              <h2 className='inbox-details-h2' style={{ marginRight: '18px' }}>
                {firstName}
              </h2>
              <h3 className='inbox-details-h4'>{phoneNumber}</h3>
            </div>
            <div className='d-flex align-items-center'>
              <MarkIcon style={{ marginRight: '24px' }} />
              <ContactIcon style={{ marginRight: '24px' }} />
              <button>
                <KebabMenuIcon />
              </button>
            </div>
          </div>
          <div
            className='d-grid'
            style={{ gridTemplateColumns: '42% 16% 42%', marginTop: '14px' }}
          >
            <div className='d-flex align-items-center'>
              <div className='inbox-details-new-message-vertical-divider'></div>
            </div>
            <h2 className='inbox-details-new-message-h2'>New Message</h2>
            <div className='d-flex align-items-center'>
              <div className='inbox-details-new-message-vertical-divider'></div>
            </div>
          </div>
          <div className='inbox-details-chat-wrapper'>
            {inboxDetailsData
              .find((data) => data.id === inboxId)
              ?.details?.map((details) => (
                <div key={Math.random()}>
                  {details?.received_name?.length > 0 && (
                    <div>
                      <div className='inbox-details-chat-received'>
                        <div className='d-flex'>
                          <h2
                            className='inbox-details-h2'
                            style={{ marginRight: '14px' }}
                          >
                            {details?.received_name}
                          </h2>
                          <h4 className='inbox-details-h4'>
                            {details?.received_date}
                          </h4>
                        </div>
                        <p
                          className='inbox-content-paragraph'
                          style={{ color: '#918d8d' }}
                        >
                          {details?.received_content}
                        </p>
                      </div>
                    </div>
                  )}
                  {details?.sent_name?.length > 0 && (
                    <div className='d-flex justify-content-end'>
                      <div className='inbox-details-chat-sent'>
                        <div className='d-flex'>
                          <h2
                            className='inbox-details-h2'
                            style={{ marginRight: '31px', color: 'white' }}
                          >
                            {details?.sent_name}
                          </h2>
                          <h4
                            className='inbox-details-h4'
                            style={{ color: 'white' }}
                          >
                            {details?.sent_date}
                          </h4>
                        </div>
                        <p
                          className='inbox-content-paragraph'
                          style={{ color: 'white' }}
                        >
                          {details?.sent_content}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
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
              />
              <div>
                <ClockIcon style={{ marginRight: '8px' }} />
                <button className='inbox-details-response--btn'>
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
      )}
    </div>
  );
};

export default InboxContent;
