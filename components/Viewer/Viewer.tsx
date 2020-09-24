import React from 'react';
import {useEffect, useRef} from 'react';
import WebViewer from '@pdftron/webviewer';

const MyComponent = () => {
  const viewer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    WebViewer(
      {
        path: 'lib',
        initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/PDFTRON_about.pdf',
      },
      viewer.current as HTMLDivElement,
    ).then((instance) => {
        // you can now call WebViewer APIs here...
      });
  }, []);

  return (
    <div className="MyComponent">
      <div className="webviewer" ref={viewer} style={{height: "100vh"}}></div>
    </div>
  );
};

export default MyComponent;