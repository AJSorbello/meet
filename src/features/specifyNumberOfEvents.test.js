import { defineFeature, loadFeature } from 'jest-cucumber';
import { render, fireEvent, waitFor } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  let component;
  const setCurrentNOE = jest.fn();
beforeEach(() => {
  component = render(
    <NumberOfEvents currentNOE={32} setCurrentNOE={setCurrentNOE} setErrorAlert={() => { }} />
  )
})
  test('When user hasn’t specified a number, 32 events are shown by default', ({ given, then }) => {
    given('the NumberOfEvents component is rendered', () => {
    });

    then('the user should see 32 events displayed by default', () => {
      const inputElement = component.getByLabelText('Number of Events:');
      expect(inputElement.value).toBe('32');
    });
  });

  test('User can change the number of events displayed', ({ given, when, then, and }) => {
    let inputElement;

    given('the NumberOfEvents component is rendered', () => {
      inputElement = component.getByLabelText('Number of Events:');
    });

    when('the user specifies a different number of events', () => {
      fireEvent.change(inputElement, { target: { value: '20' } });
    });

    then('the number of events displayed should update accordingly', async () => {
      await waitFor(() => {
        expect(setCurrentNOE).toHaveBeenCalledWith(20); // Assuming setCurrentNOE updates the number of events
      });
    });

    and('the user should see the specified number of events displayed', () => {
      expect(inputElement.value).toBe('20');
    });
  });
});
