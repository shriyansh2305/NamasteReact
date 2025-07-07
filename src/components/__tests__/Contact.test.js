import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// Grouping the tests
describe("Contact Us Page Test Case", () => {
  test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
  });
  test("Should load button inside contact component", () => {
    render(<Contact />);
    //   const button = screen.getByRole("button");
    const button = screen.getByText("Submit");
    // Assertion
    expect(button).toBeInTheDocument();
  });
  test("Should load name placeholder text field contact component", () => {
    render(<Contact />);
    //   const button = screen.getByRole("button");
    const inputName = screen.getByPlaceholderText("name");
    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 inout boxes on the Contact Component", () => {
    render(<Contact />);
    // Querying
    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes.length);
    expect(inputBoxes.length).not.toBe(3);
  });
});
