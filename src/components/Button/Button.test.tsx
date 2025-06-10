import { render } from "@testing-library/react";
import BuyButton from "./Button";

describe("Button", () => {
  it("should render button", () => {
    const { getByTestId, getByText } = render(
      <BuyButton subtitle="subtitle" title="test" />
    );
    expect(getByTestId("button")).toBeInTheDocument();
    expect(getByText(/test/i)).toBeInTheDocument();
  });
  it("should render the discount", () => {
    const { getByText } = render(
      <BuyButton subtitle="subtitle" title="test" discount="20% discount" />
    );
    expect(getByText(/20% discount/i)).toBeInTheDocument();
  });
});
