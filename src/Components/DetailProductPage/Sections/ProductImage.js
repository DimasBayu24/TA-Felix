import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";

function ProductImage(props) {
  const [Images, setImages] = useState([]);

  useEffect(
    () => {
      //   if (props.detail.images && props.detail.images.length > 0) {
      let images = [];

      // props.detail.images &&
      //   props.detail.images.map((item) => {

      //   images.push({
      //     original: `https://res.cloudinary.com/dimasbayuseno/image/upload/v1655650384/go-cloudinary/erphkho2rtqs5dwshhcm.jpg`,
      //     thumbnail: `https://res.cloudinary.com/dimasbayuseno/image/upload/v1655650384/go-cloudinary/erphkho2rtqs5dwshhcm.jpg`,
      //   });
      //   images.push({
      //     original: `https://res.cloudinary.com/dimasbayuseno/image/upload/v1655650352/go-cloudinary/jvm2t9q4ipfw5nno2xsk.jpg`,
      //     thumbnail: `https://res.cloudinary.com/dimasbayuseno/image/upload/v1655650352/go-cloudinary/jvm2t9q4ipfw5nno2xsk.jpg`,
      //   });
      //   });
      setImages(images);
      //   }
    },
    [props.detail]
  );

  return (
    <div>
      <ImageGallery items={Images} />
    </div>
  );
}

export default ProductImage;
