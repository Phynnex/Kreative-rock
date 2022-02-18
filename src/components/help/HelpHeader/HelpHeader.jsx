import React from 'react';
import {Header, HeaderImg, HeaderText, HelpSearch, Hr, InputContainer} from './style'
import search from 'assets/images/searchIcon.svg'

const HelpHeader = () => {
  return (
    <>
      <Header>
        <HeaderText>How Can We Help ?</HeaderText>
        <InputContainer>
          <HeaderImg src={search} alt="search" />
          <HelpSearch
            type="text"
            id="fname"
            name="fname"
            placeholder="Search Contact"
          ></HelpSearch>
        </InputContainer>
      </Header>
      <Hr />
    </>
  );
}

export default HelpHeader;