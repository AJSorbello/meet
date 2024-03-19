import { render, fireEvent } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  const setCurrentNOE = jest.fn();
  const currentNOE = 32;

 test('renders textbox', () => {
  const { getByRole } = render(<NumberOfEvents />);
  const numberInput = getByRole('spinbutton');
  expect(numberInput).toBeInTheDocument();
});

  test("by default, number of event is listed as 32", () => {
  const { getByRole } = render(<NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE} />);
  expect(getByRole('spinbutton')).toHaveValue(32);
});

test("changes value when number of events is updated", () => {
  const { getByRole } = render(<NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE} />);
  const numberInput = getByRole('spinbutton');
  fireEvent.change(numberInput, { target: { valueAsNumber: 10 } });
  expect(numberInput).toHaveValue(10);
});
});