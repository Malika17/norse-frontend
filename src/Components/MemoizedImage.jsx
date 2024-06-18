import React from "react";

const MemoizedImage = React.memo(({ src, alt }) => {
  return <img src={src} alt={alt} />;
});

export default MemoizedImage;
