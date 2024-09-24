import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "../pages/Dashboard";

test("renders the title", () => {
  render(<Dashboard title="Streamify Dashboard" />);
  const headingElement = screen.getByRole("heading", {
    name: /Streamify Dashboard/i,
  });
  expect(headingElement).toBeInTheDocument();
});
