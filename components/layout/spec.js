import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Wrapper from ".";

describe("<Wrapper />", () => {
  it("Should render component properly", () => {
    render(<Wrapper />);

    expect(screen.getByText(/json formated/i)).toBeInTheDocument();
  });
});
