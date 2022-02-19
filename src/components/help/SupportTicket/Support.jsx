import React from 'react';
import ActionBtnDashboard from "components/dashboard/actionbuttons";
import { AttachDiv, AttachInput, SupportDescription, SupportHeader, SupportImg, SupportImgDiv, SupportInput, SupportSubject, SupportTitle } from './style';
import Attach from 'assets/images/Attach.png'


const Support = () => {
  return (
    <>
      <SupportHeader>
        <SupportTitle>Support Ticket</SupportTitle>
        <ActionBtnDashboard />
      </SupportHeader>
      <SupportInput>
        <SupportSubject
          id=""
          name="ticket"
          placeholder="Ticket Subject"
        ></SupportSubject>
        <SupportDescription
          id=""
          name=""
          placeholder="Description"
        ></SupportDescription>
        <AttachDiv>
          <AttachInput type="text" name="" placeholder="Attachments"></AttachInput>
          <SupportImgDiv>
            <SupportImg src={Attach} alt="attach"/>
          </SupportImgDiv>
        </AttachDiv>
      </SupportInput>
    </>
  );
}



export default Support;