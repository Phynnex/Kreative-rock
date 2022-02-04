import React from 'react';
import InboxContent from './InboxContent/InboxContent';
import InboxSideBar from './InboxSideBar/InboxSideBar';

const InboxLayout = () => {
  return (
    <div className='inbox-main-layout'>
      <InboxSideBar />
      <div className='inbox-layout-divider'></div>
      <InboxContent />
    </div>
  );
};

export default InboxLayout;
