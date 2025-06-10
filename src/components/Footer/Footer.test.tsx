import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("should render the footer", () => {
    const { getByText } = render(<Footer />);
    expect(
      getByText(/© Copyright 2024. Bhive Private Limited/i)
    ).toBeInTheDocument();
  });
});
