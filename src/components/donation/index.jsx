import React, { useEffect, useRef } from 'react';

const AdoptGoFundMeWidget = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const externalWidget = document.querySelector('.gfm-embed');

    if (externalWidget && wrapperRef.current) {
      wrapperRef.current.appendChild(externalWidget);
    }
  }, []);

  return <div ref={wrapperRef} />;
};

export default AdoptGoFundMeWidget;
