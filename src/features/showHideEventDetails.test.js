import { defineFeature, loadFeature } from "jest-cucumber";
import { render, fireEvent, waitFor, within } from "@testing-library/react";
import App from "../App";

const feature = loadFeature("./src/features/showHideEventDetails.feature");

defineFeature(feature, (test) => {
  let AppComponent;

  beforeEach(() => {
    AppComponent = render(<App />);
  });

  test("An event element is collapsed by default", ({ given, and, then }) => {
    given("the app is open", () => {
      // No additional setup needed as it's already covered by beforeEach
    });

    and("the user is viewing a list of events on the app", () => {
      // No additional setup needed as it's already covered by beforeEach
    });

    then("each event's details are initially collapsed", () => {
      // Check if each event's details are collapsed by default
      const eventDetails = document.querySelectorAll(
        '[data-testid="event-details"]'
      );
      expect(eventDetails.length).toBe(0);
    });
  });

  test("User can expand an event to see details", ({
    given,
    and,
    when,
    then,
  }) => {
    let EventComponent;

    given("the app is open", () => {
      // No additional setup needed as it's already covered by beforeEach
    });
    and("the user is viewing a list of events on the app", () => {
      // No additional setup needed as it's already covered by beforeEach
    });

    given("an event is listed with collapsed details", () => {
      // Simulate the UI interaction to have a collapsed event
    });
    when("the user clicks on the event to expand details", async () => {
      await waitFor(() => {
        const eventList = AppComponent.container.querySelector("#event-list");
        expect(eventList).not.toBeNull();
        EventComponent = eventList.querySelector(".event");
        expect(EventComponent).not.toBeNull(); // Add this line
      });
      const button = EventComponent.querySelector(".details-btn");
      fireEvent.click(button);
	});
    then("the event details are displayed", async () => {
    await waitFor(() => {
      // Check if the event details are displayed after expanding
      const eventDetails = EventComponent.querySelector(".details");
      expect(eventDetails).not.toBeNull();
    });
  });
});
	  
  test("User can collapse an event to hide details", ({
      given,
      and,
      when,
      then,
    }) => {
	let EventComponent;

      given("the app is open", () => {
        // No additional setup needed as it's already covered by beforeEach
      });

      and("the user is viewing a list of events on the app", () => {
        // No additional setup needed as it's already covered by beforeEach
      });
 given('the user sees the details of an event', async () => {
      const AppDOM = AppComponent.container.firstChild;

      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole('listitem');
        expect(eventList[0]).toBeTruthy();
        EventComponent = eventList[0];
      });
	});
      

    when("the user clicks on the event to collapse details", async() => {
  // Define the button in the scope of this test
  const button = EventComponent.querySelector(".details-btn");
  fireEvent.click(button);
});

    then("the event details are hidden", () => {
const eventDetails = within(EventComponent).queryByTestId('details');     
 expect(eventDetails).not.toBeInTheDocument(); // eventDetails should be null if the details are hidden
    });
  });
});
