import React from 'react';
import {Header, HeaderText, Hr, InputContainer} from './style'

const HelpHeader = () => {
  return (
    <>
      <Header>
        <HeaderText>How Can We Help ?</HeaderText>
        <div>
          <InputContainer
            type="text"
            id="fname"
            name="fname"
            placeholder="Search Contact">
          </InputContainer>
        </div>
      </Header>
      <Hr />
    </>
  );
}

export default HelpHeader;