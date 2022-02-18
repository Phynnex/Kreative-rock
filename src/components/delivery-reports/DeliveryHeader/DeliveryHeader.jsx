import ActionBtnDashboard from 'components/dashboard/actionbuttons';
import { Hr } from 'components/help/HelpHeader/style';
import React from 'react';
import { DHeader } from './style';

const DeliveryHeader = () => {
  return (
    <>
      <DHeader>
        <h1>Delivery Reports</h1>
        <ActionBtnDashboard />
      </DHeader>
      <Hr />
    </>
  );
}



export default DeliveryHeader;