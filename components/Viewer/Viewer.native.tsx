import React from 'react';
import {useEffect} from 'react';

import { DocumentView, RNPdftron } from 'react-native-pdftron';

const MyComponent = () => {

  useEffect(() => {
    RNPdftron.initialize("Insert commercial license key here after purchase");
  }, []);

  return (
    <DocumentView
      document={"https://pdftron.s3.amazonaws.com/downloads/pl/PDFTRON_about.pdf"}
      padStatusBar
    />
  );
};

export default MyComponent;