import React from 'react';
import {useEffect, useRef} from 'react';
import WebViewer from '@pdftron/webviewer';

type ViewerProps = {
  document: string
}

const MyComponent = ({ document }: ViewerProps) => {
  const viewer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    WebViewer(
      {
        path: 'lib',
        initialDoc: document,
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