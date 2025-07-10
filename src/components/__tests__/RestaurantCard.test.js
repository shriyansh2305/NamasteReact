import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
it("Should render RetaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
});
it("Should render RetaurantCard component with promoted label", () => {
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
  render(<PromotedRestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
});
