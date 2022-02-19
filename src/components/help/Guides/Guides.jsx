import React from 'react';
import library_books from 'assets/images/library_books.png';
import group from "assets/images/group.png";
import bulb from "assets/images/bulb.png";
import {GuideHeader, GuidePara, GuidesButton, GuidesContainer, ImageContainer, ImageDiv, ImageDiv2, ImageDiv3, Img} from './style'


const Guides = () => {
  return (
    <>
      <GuidesContainer>
        <GuidesButton>
          <ImageContainer>
            <ImageDiv>
              <div>
                <Img src={library_books} alt="docs" />
              </div>
            </ImageDiv>
          </ImageContainer>
          <GuideHeader>Read Our Docs</GuideHeader>
          <GuidePara>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus
            turpis condimentum scelerisque
          </GuidePara>
        </GuidesButton>
        <GuidesButton>
          <ImageContainer>
            <ImageDiv2>
              <div>
                <Img src={group} alt="group" />
              </div>
            </ImageDiv2>
          </ImageContainer>
          <GuideHeader>Ask Community</GuideHeader>
          <GuidePara>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus
            turpis condimentum scelerisque
          </GuidePara>
        </GuidesButton>
        <GuidesButton>
          <ImageContainer>
            <ImageDiv3>
              <div>
                <Img src={bulb} alt="bulb" />
              </div>
            </ImageDiv3>
          </ImageContainer>
          <GuideHeader>Share a tip </GuideHeader>
          <GuidePara>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus
            turpis condimentum scelerisque
          </GuidePara>
        </GuidesButton>
      </GuidesContainer>
    </>
  );
}



export default Guides;