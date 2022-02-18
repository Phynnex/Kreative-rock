import styled from "styled-components";
import media from "utils/media";


export const GuidesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  ${media.mobile`
    flex-direction:column;
    align-items:center;
  `}
  
`;
export const GuidesButton = styled.button`
  width: 321px;
  height: 306.07px;
  background: #ffffff;
  border: 2px solid #cfcfcf;
  box-sizing: border-box;
  border-radius: 33px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content:center;
  padding: 1rem;
`

export const ImageDiv = styled.div`
  width: 136px;
  height: 136px;
  background: #d5e13d;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

export const ImageDiv2 = styled.div`
  width: 136px;
  height: 136px;
  background: #1EA5A5;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

export const ImageDiv3 = styled.div`
  width: 136px;
  height: 136px;
  background: #dc9a38;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 69px;
  height: 69px;
`;



export const GuideHeader = styled.p`
  font-family: Lora;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 38px;
  text-transform: capitalize;
  color: #000000;
`;

export const GuidePara = styled.p`
  font-family: Lora;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  color: #6b6b6b;
  margin-top: -.5rem
`;