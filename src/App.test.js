import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

test("loading initial state to be an array with length 5", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state("questions").length).toBe(5);
});
