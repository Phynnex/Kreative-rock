import styled from "styled-components";
import media from "utils/media";

export const SupportHeader = styled.div`
  display:flex;
  justify-content:space-between;
  margin: 2rem 2.5rem 0rem;
  ${media.mobile`
    display:block;
    margin:1.5rem 0rem 0rem;
    `}
`

export const SupportTitle = styled.p`
  font-weight: normal;
  font-size: 36px;
  line-height: 46px;
  color: #000000;
`;

export const SupportInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SupportSubject = styled.input`
  width: 787px;
  height: 45px;
  background: #f1f1f1;
  border: 1px solid rgba(0, 204, 167, 0.7);
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 16px;
  line-height: 31px;
  color: #9d9d9d;
  padding: 0rem 1rem;
  :focus {
    border: 1px solid #00CCA7;
    outline:none;
  }
  ${media.mobile`
  width:80%;
  `}
`;

export const SupportDescription = styled.textarea`
  width: 787px;
  height: 196px;
  background: #f1f1f1;
  border: 1px solid rgba(0, 204, 167, 0.7);
  box-sizing: border-box;
  border-radius: 5px;
  margin-top: 1rem;
  padding: 1rem 1rem 0rem;
  :focus {
    border: 1px solid #00cca7;
    outline: none;
  }
  ${media.mobile`
  width:80%;
  `}
`;

export const AttachDiv = styled.div`
  width: 787px;
  display: flex;
  justify-content: space-between;
  background: #f1f1f1;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 2rem 0rem;
  ${media.mobile`
  width: 80%;
  `}
`;

export const AttachInput = styled.input`
  width: 100%;
  background: #f1f1f1;
  border: 1px solid rgba(0, 204, 167, 0.7);
  color: #f1f1f1;
  border-radius: 5px;
  padding-left: 0.5rem;
  :focus {
    border: 1px solid #00cca7;
    outline: none;
  }
`;

export const SupportImgDiv = styled.div`
  width: 90px;
  background: #00cca7;
  display: flex;
  justify-content: center;
`;

export const SupportImg = styled.img`
  width: 30px;
  padding: 0.4rem 0rem;
`
