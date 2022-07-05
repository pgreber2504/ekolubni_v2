import React from "react";
import classes from "./Gallery.module.scss";
import SectionWrapper from "../../components/UI/SectionWrapper/SectionWrapper";
import GalleryItem from "./GalleryItem/GalleryItem";
import { GALLERY_DATA } from "../../constants/gallery-data";

type GalleryPropTypes = {
  id: string;
  title: string;
  description: string;
};

const Gallery = ({ id, title, description }: GalleryPropTypes) => {
  return (
    <SectionWrapper id={id} title={title} description={description}>
      <div className={classes.gallery}>
        {GALLERY_DATA.map((el) => (
          <GalleryItem
            key={el.alt}
            src={el.src}
            alt={el.alt}
            title={el.title}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Gallery;
