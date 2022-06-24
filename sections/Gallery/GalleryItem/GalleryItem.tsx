import React from "react";
import classes from "./GalleryItem.module.scss";
import Card from "../../../components/UI/Card/Card";
import Image, { StaticImageData } from "next/image";

const GalleryItem = ({
  title,
  src,
  alt,
}: {
  title: string;
  src: StaticImageData;
  alt: string;
}) => {
  return (
    <Card className={classes["gallery-item"]}>
      <h4>{title}</h4>
      <Image layout="responsive" src={src} alt={alt} />
    </Card>
  );
};

export default GalleryItem;
