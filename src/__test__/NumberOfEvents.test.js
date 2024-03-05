import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents />);
  });

  test('renders number of events', () => {
    const textBoxElement = NumberOfEventsComponent.getByRole('textbox');
    expect(textBoxElement).toHaveValue('32');
  });

test('value changes when a user types into the textbox', async () => {
  const textBoxElement = NumberOfEventsComponent.getByRole('textbox');
  await userEvent.type(textBoxElement, '{backspace}{backspace}10');
  expect(textBoxElement).toHaveValue('10');
});

});