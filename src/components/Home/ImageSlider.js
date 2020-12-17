import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";

export default function ImageSlider(props) {
  var items = [
    {
      name: "Image 1",
      description: "Description for image 1",
      imgSrc: "https://judycitron.com/wp-content/uploads/2020/02/1-front-1200x800.jpg",
    },
    {
      name: "Image 2",
      description: "Description for image 2",
      imgSrc:
        "https://judycitron.com/wp-content/uploads/2020/08/42-Camino-Blu-Skye-Media-2149-X3-1200x703.jpg",
    },
    {
      name: "Image 3",
      description: "Description for image 3",
      imgSrc:
        "https://judycitron.com/wp-content/uploads/2020/02/119-Selby-Ln-Atherton-CA-94027-print-001-036-Twilight-Front-Exterior-4200x2800-300dpi-web.jpg",
    },
    {
      name: "Image 4",
      description: "Description for image 4",
      imgSrc: "https://judycitron.com/wp-content/uploads/2020/07/1-1.jpg",
    },
  ];

  return (
    <Carousel className="carousel" interval={5000} animation="slide" navButtonsAlwaysVisible={true}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item({ item }) {
  return (
    <Paper className="carousel-item">
      <img src={item.imgSrc} alt={item.name} />
    </Paper>
  );
}
