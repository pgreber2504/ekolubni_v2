import React from "react";
import SectionWrapper from "../../components/UI/SectionWrapper/SectionWrapper";

type GalleryPropTypes = {
  id: string;
  title: string;
  description: string;
};

const Gallery = ({ id, title, description }: GalleryPropTypes) => {
  return (
    <SectionWrapper
      id={id}
      title={title}
      description={description}
    ></SectionWrapper>
  );
};

export default Gallery;
