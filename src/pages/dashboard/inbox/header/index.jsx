import React from 'react';
import { ReactComponent as HeaderIllustration } from '../../../../assets/images/inboxheader.svg';
import { ReactComponent as NotificationIcon } from '../../../../assets/images/notification.svg';

const Header = () => {
  return (
    <div className='inbox-header-wrapper'>
      <h2 className='inbox-header-h2'>Inbox</h2>
      <div className='d-flex justify-content-center'>
        <HeaderIllustration />
      </div>
      <div className='inbox-header-notification-wrapper'>
        <NotificationIcon />
      </div>
    </div>
  );
};

export default Header;
