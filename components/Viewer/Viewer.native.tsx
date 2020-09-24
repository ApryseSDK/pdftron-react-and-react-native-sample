import React from 'react';
import {useEffect} from 'react';

import { DocumentView, RNPdftron } from 'react-native-pdftron';

type ViewerProps = {
  document: string
}

const MyComponent = ({ document }: ViewerProps) => {

  useEffect(() => {
    RNPdftron.initialize("Insert commercial license key here after purchase");
  }, []);

  return (
    <DocumentView
      document={document}
      padStatusBar
    />
  );
};

export default MyComponent;