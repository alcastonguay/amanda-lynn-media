import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./header";

describe("Header component", () => {
  test("Displays the correct title", () => {
    render(<Header siteTitle="Amanda Lynn Media" />);

    screen.findByText("Amanda Lynn Media");
  });
});
