import { defineFeature, loadFeature } from 'jest-cucumber';
import { render, fireEvent } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  let component;
  const setCurrentNOE = jest.fn();
  
  test('When user hasn’t specified a number, 32 events are shown by default', ({ given, then }) => {
    given('the NumberOfEvents component is rendered', () => {
      component = render(<NumberOfEvents currentNOE={32} setCurrentNOE={setCurrentNOE} />);
    });

    then('the user should see 32 events displayed by default', () => {
      const inputElement = component.getByLabelText('Number of Events:');
      expect(inputElement.value).toBe('32');
    });
  });

  test('User can change the number of events displayed', ({ given, when, then, and }) => {
    	given('the NumberOfEvents component is rendered', () => {

    	});

    	when('the user specifies a different number of events', () => {

    	});

    	then('the number of events displayed should update accordingly', () => {

    	});

    	and('the user should see the specified number of events displayed', () => {

    	});
    });
});