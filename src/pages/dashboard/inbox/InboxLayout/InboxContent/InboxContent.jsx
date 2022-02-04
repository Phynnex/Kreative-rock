import React from 'react';

const InboxContent = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
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
    </div>
  );
};

export default InboxContent;
