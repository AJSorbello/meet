import { render, fireEvent } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
  NumberOfEventsComponent = render(
  <NumberOfEvents 
  setCurrentNOE={() => { }} 
  currentNOE={32} 
  setErrorAlert={() => { }} />);
});

  test('renders textbox', () => {
    expect(NumberOfEventsComponent.getByRole('spinbutton')).toBeInTheDocument();
  });

  test("by default, number of event is listed as 32", () => {
    expect(NumberOfEventsComponent.getByRole('spinbutton')).toHaveValue(32);
  });

  test("changes value when number of events is updated", () => {
    const numberInput = NumberOfEventsComponent.getByRole('spinbutton');
    fireEvent.change(numberInput, { target: { valueAsNumber: 10 } });
    expect(numberInput).toHaveValue(10);
  });
});