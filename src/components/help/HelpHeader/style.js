import media from "utils/media"
import styled from "styled-components";


export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0rem 1rem;
  flex-direction: row;

  ${media.mobile`
	flex-direction: column;
    `}
`;

export const HeaderText = styled.p`
  font-weight: normal;
  font-size: 3rem;
  line-height: 61px;
  text-transform: capitalize;
  color: #000000;
  ${media.mobile`
    font-size: 2rem;
  `}
`;

export const InputContainer = styled.div`
  width: 280px;
  height: 50px;
  display:flex;
  justify-content: space-around;
  background: #f1f1f1;
  border: 1px solid rgba(0, 204, 167, 0.7);
  box-sizing: border-box;
  border-radius: 42px;
  // padding-left: 3rem;
  margin-bottom: 1rem;

  ${media.mobile`
    height: 45px;
    `}
`;

export const HeaderImg = styled.img`
  padding: 0rem;
  width: 30px;
`
export const HelpSearch = styled.input`
  background: #f1f1f1;
  border-radius: 42px;
  :focus{
    border:none;
    outline:none;
  }
`;

export const Hr = styled.hr`
  margin: 0rem 1rem;
  background: #00cca7;
  border-radius: 10px;
`;
