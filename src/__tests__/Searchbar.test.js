import React from "react";
import { shallow, render, mount } from "enzyme";
import { createShallow } from "@material-ui/core/test-utils";
import { Searchbar } from "../components/Navbar/Searchbar/Searchbar";

describe("<Searchbar />", () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  test("renders correctly", () => {
    const wrapper = shallow(<Searchbar />);
    expect(wrapper.exists()).toBeTruthy();
  });

  test("renders input element with placeholder", () => {
    const wrapper = shallow(<Searchbar />);
    const placeholder = "Search";
    expect(wrapper.props().children.props.placeholder).toEqual(placeholder);
  });
});
