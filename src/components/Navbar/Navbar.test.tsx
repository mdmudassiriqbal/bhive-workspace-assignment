import { render } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Nav bar", () => {
  it("should render the navbar", () => {
    const { getByTestId } = render(<Navbar />);
    expect(getByTestId("navbar")).toBeInTheDocument();
    expect(getByTestId("logo")).toBeInTheDocument();
    expect(getByTestId("phoneIcon")).toBeInTheDocument();
  });
});
