import React from 'react';

function BannerImage({ text, imageName }) {
  return (
    <div>
      <img src={`/images/${imageName}`} alt={text} className="d-block w-100" />
    </div>
  );
}

export default BannerImage;
