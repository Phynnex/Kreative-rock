import { useState } from 'react';
import InboxContent from './InboxContent/InboxContent';
import InboxSideBar from './InboxSideBar/InboxSideBar';

const InboxLayout = () => {
  const [inboxId, setInboxId] = useState(0);
  return (
    <div className='inbox-main-layout'>
      <InboxSideBar setInboxId={setInboxId} inboxId={inboxId} />
      <div className='inbox-layout-divider'></div>
      <InboxContent inboxId={inboxId} />
    </div>
  );
};

export default InboxLayout;
