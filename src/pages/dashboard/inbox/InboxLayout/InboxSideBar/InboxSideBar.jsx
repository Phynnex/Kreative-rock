import React from 'react';
import { inboxData } from './sampledata';
import { ReactComponent as SearchIcon } from '../../../../../assets/images/search-icon.svg';

const InboxSideBar = () => {
  return (
    <div className='inbox-sidebar-wrapper'>
      <div className='inbox-sidebar-search-wrapper'>
        <label htmlFor='search-inbox'>
          <SearchIcon />
        </label>
        <input
          type='search'
          name='search-inbox'
          id='search-inbox'
          placeholder='Search'
        />
      </div>
      <div className='d-flex justify-content-between mb-3'>
        <h4 className='inbox-sidebar-h4'>Show all</h4>
        <h4 className='inbox-sidebar-h4'>Most Recent</h4>
      </div>
      <div>
        {inboxData.map((inbox) => (
          <div className='inbox-overview-list' key={Math.random()}>
            <h2 className='inbox-sidebar-h2'>{inbox.name}</h2>
            <div className='d-flex align-items-end mt-1 mb-2'>
              <h3
                className='inbox-sidebar-h3'
                style={{ color: '#918d8d', width: '210px' }}
              >
                {inbox.brief}
              </h3>
              <h3 className='inbox-sidebar-h3'>{inbox.date}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InboxSideBar;
