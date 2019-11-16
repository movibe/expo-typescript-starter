import React from "react";
import renderer from "react-test-renderer";
import "react-native";
import { AppConfig } from "../";

it("renders correctly", () => {
  const tree = renderer.create(<AppConfig />).toJSON();

  expect(tree).toMatchSnapshot();
});