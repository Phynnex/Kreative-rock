import { KButton, KreativeP } from 'globalStyles/style';
import { useState } from 'react';
import AppColors from 'utils/colors';
import EmailSignatureApp from '../TabsContent/app';
import EsDesigns from '../TabsContent/designs';
import EmailSigDetails from '../TabsContent/details';
import EsSocial from '../TabsContent/socials';
import EsTemplates from '../TabsContent/templates';

import { EsTabsContainer, TabsHeader } from './style';
import emailTabsData from './tbuttonsData';

function EmailSigTabs() {
  const [tabvalue, setTabvalue] = useState(0);
  return (
    <EsTabsContainer>
      <TabsHeader>
        {emailTabsData.map((tab) => (
          <KButton
            key={tab.id}
            bc='transparent'
            h='27px'
            p='0px 0px'
            bm={tabvalue === tab.id ? '3px solid #FF7900' : null}
            onClick={() => setTabvalue(tab.id)}
          >
            <KreativeP
              fw={tabvalue === tab.id ? 'bold' : 'normal'}
              color={
                tabvalue === tab.id ? AppColors.brandColor : AppColors.muted
              }
            >
              {tab.label}
            </KreativeP>
          </KButton>
        ))}
      </TabsHeader>
      {tabvalue === 0 && <EmailSigDetails />}
      {tabvalue === 1 && <EsSocial />}
      {tabvalue === 2 && <EsTemplates />}
      {tabvalue === 3 && <EsDesigns />}
      {tabvalue === 4 && <EmailSignatureApp />}
    </EsTabsContainer>
  );
}

export default EmailSigTabs;
