import { render } from "@testing-library/react";
import SpaceCard from "./SpaceCard";

describe("Space card", () => {
  it("should render the space card", () => {
    const { getAllByTestId, getByText, getByAltText } = render(
      <SpaceCard
        address={"Test address"}
        image={"/static_assets/abc.png"}
        dayPassPrice={12}
        bulkPassPrice={120}
        bulkDays={10}
        bulkDiscount={"20% discount"}
        distance={6}
      />
    );
    expect(getByText(/test address/i)).toBeInTheDocument();
    expect(getByAltText(/space-image/i)).toBeInTheDocument();
    expect(getAllByTestId("button")).toHaveLength(2);
    expect(getByText(/6/i)).toBeInTheDocument();
  });
});
