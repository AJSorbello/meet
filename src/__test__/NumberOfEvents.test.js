import { render, fireEvent } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  const setCurrentNOE = jest.fn();
  const currentNOE = 32;

  test("renders textbox", () => {
    const { getByRole } = render(<NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE} />);
    const numberTextBox = getByRole('textbox');
    expect(numberTextBox).toBeInTheDocument();
    expect(numberTextBox).toHaveClass('numberofevents');
  });

  test("by default, number of event is listed as 32", () => {
    const { getByRole } = render(<NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE} />);
    expect(getByRole('textbox')).toHaveValue('32');
  });

  test("changes value when number of events is updated", () => {
    const { getByRole } = render(<NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE} />);
    const numberTextBox = getByRole('textbox');
    fireEvent.change(numberTextBox, { target: { value: '10' } });
    expect(numberTextBox).toHaveValue('10');
  });
});