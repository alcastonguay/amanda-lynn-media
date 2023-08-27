import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo/seo.js";
import "./index.css";

function IndexPage() {
  // Image info:
  // const carouselImages = [{src: "../images/home-head/1.jpg", alt: "Tabletop touchscreen displaying map visualization."},
  // {src: "../images/home-head/2.png", alt: "Newly renovated living room featuring darkwood flooring, gray walls, and a chocolate brown banister."},
  // {src: "../images/home-head/3.png", alt: "A color wheel of ice cubes melting on a granite surface."},
  // {src: "../images/home-head/4.jpg", alt: "Amanda Lynn climbing a roof while painting a white house."},
  // {src: "../images/home-head/5.png", alt: "Color pencile and india ink multimedia drawing of a sunset reflecting on a lake in the forest."},
  // {src: "../images/home-head/6.png", alt: "A small house on a brick sidewalk, with a tree in a sidewalk plot surrounded by flowers."}];

  let carouselItems = [
    <div className="carousel-item  h-100" key="carousel-1">
      <img
        src="/images/home-head/1.jpg"
        alt="Tabletop touchscreen displaying map visualization."
        className="img-fluid"
      />
    </div>,
    <div className="carousel-item  h-100" key="carousel-2">
      <img
        src="/images/home-head/2.png"
        alt="Newly renovated living room featuring darkwood flooring, gray walls, and a chocolate brown banister."
        className="img-fluid"      />
    </div>,
    <div className="carousel-item  h-100" key="carousel-3">
      <img
        src="../images/home-head/3.png"
        alt="A color wheel of ice cubes melting on a granite surface."
        className="img-fluid"
      />
    </div>,
    <div className="carousel-item h-100" key="carousel-4">
      <img
        src="../images/home-head/4.jpg"
        alt="Amanda Lynn climbing a roof while painting a white house."
        className="img-fluid"
      />
    </div>,
    <div className="carousel-item  h-100" key="carousel-5">
      <img
        src="../images/home-head/5.jpg"
        alt="Color pencile and india ink multimedia drawing of a sunset reflecting on a lake in the forest."
        className="img-fluid"
      />
    </div>,
    <div className="carousel-item active h-100" key="carousel-6">
      <div className="h-100 d-inline-block">
      <img
        src="../images/home-head/6.png"
        alt="A small house on a brick sidewalk, with a tree in a sidewalk plot surrounded by flowers."
        className="img-fluid mx-auto"
      />
      </div>
    </div>
  ];

  return (
    <Layout>
        <div id="carouselExample" className="carousel slide vh-100">
          <div className="carousel-inner h-100 text-center">{carouselItems}</div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      <div className="text-center">
          <h1>Amanda Lynn Media</h1>
          <h2>Multimedia Design & Development</h2>
        </div>
    </Layout>
  );
}

export default IndexPage;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export function Head() {
  return <Seo />;
}
