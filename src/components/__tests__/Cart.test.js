import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/resMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("Should load restaurant menu component, add to cart, show in the header, and clear cart", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("ROLLS (17)");
  fireEvent.click(accordionHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(17);
  expect(screen.getByText("Cart (0)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart (1)")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart (2)")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(19);
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(17);
  expect(
    screen.getByText("Your Cart is Empty. Add Items to the Cart!")
  ).toBeInTheDocument();
});
