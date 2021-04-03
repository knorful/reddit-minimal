import React from "react";
import { shallow, render, mount } from "enzyme";
import { Searchbar } from "../components/Navbar/Searchbar/Searchbar";

describe("<Searchbar /> ", () => {
  test("contains input field", () => {
    const wrapper = shallow(<Searchbar />);
    expect(wrapper.find("input").length).toEqual(1);
  });

  test("contains placeholder text", () => {
    const wrapper = shallow(<Searchbar />);
    const placeholder = "Search";
    expect(wrapper.find("input").props().placeholder).toEqual(placeholder);
  });
});
