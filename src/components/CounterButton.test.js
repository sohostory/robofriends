import { shallow } from "enzyme";
import CounterButton from "./CounterButton";

it("reders without crashing", () => {
  expect(shallow(<CounterButton />)).toMatchSnapshot();
});

it("correctly increments the counter", () => {
  const wrapper = shallow(<CounterButton />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 1 });
  wrapper.find('[id="counter"]').simulate("click");
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 3 });
});
