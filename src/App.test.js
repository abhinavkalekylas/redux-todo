import { render, screen } from "@testing-library/react";
import App from "./App";
import toJson from "enzyme-to-json";
import { shallow, mount } from "enzyme";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("renders correctly App component", () => {
  const wrapper = shallow(<App />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
