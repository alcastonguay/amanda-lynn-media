import React from "react";
import * as Gatsby from "gatsby";
import { render, screen } from "@testing-library/react";

import NotFoundPage from "./404";

describe("404 page...", () => {
  const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`);
  const mockUseStaticQuery = {
    site: {
      siteMetadata: {
        title: "Amanda Lynn Media",
        description: "Portfolio website for Amanda Lynn's multimedia projects.",
        image: "/images/og-image.png",
        siteUrl: "https://amandalynn.media/",
        author: "amandalynn.maker@gmail.com"
      }
    }
  };

  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("Displays the correct title", () => {
    render(<NotFoundPage />);
    screen.getByText("404: Not Found");
  });
});
