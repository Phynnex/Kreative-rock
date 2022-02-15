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
  font-family: Lora;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 61px;
  text-transform: capitalize;
  color: #000000;
`;

export const InputContainer = styled.input`
  width: 100%;
  height: 60px;
  background: #f1f1f1;
  border: 1px solid rgba(0, 204, 167, 0.7);
  box-sizing: border-box;
  border-radius: 42px;
  padding-left: 3rem;
  margin-bottom: 1rem;

  ${media.mobile`
	flex-direction: column;
    `}
`;

export const Hr = styled.hr`
  margin: 0rem 1rem;
  background: #00cca7;
  border-radius: 10px;
`;
