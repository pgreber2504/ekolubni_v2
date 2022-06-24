import React from "react";
import Card from "../../../components/UI/Card/Card";

const GalleryItem = ({ title }: { title: string }) => {
  return (
    <Card>
      <h4>{title}</h4>
    </Card>
  );
};

export default GalleryItem;
