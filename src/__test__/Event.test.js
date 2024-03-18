// src/__tests__/Event.test.js

import { render, fireEvent } from "@testing-library/react";
import Event from "../components/Event";
import { getEvents } from "../api";

describe("<Event /> component", () => {
  let EventComponent;
  let allEvents;

  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test("renders event title", () => {
    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
  });

  test("renders event location", () => {
    expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
  });

  test("renders event start time", () => {
    const startTime = `Start Time: ${new Date(allEvents[0].start.dateTime).toLocaleTimeString()}`;
    expect(EventComponent.getByText(startTime)).toBeInTheDocument();
  });

  //  test('renders event details button with the title (show details)', () => {
  //   expect(EventComponent.queryByText('show details')).toBeInTheDocument();
  // });

  test("by default, event's details section should be hidden", () => {
    expect(EventComponent.container.querySelector(".details")).not.toBeInTheDocument();
  });
  
  test("toggles between show and hide details when clicked", () => {
  // Check initial state
  expect(EventComponent.getByText("Show Details")).toBeInTheDocument();

  // Simulate a click
  fireEvent.click(EventComponent.getByText("Show Details"));

  // Check if the text changes to "Hide Details"
  expect(EventComponent.getByText("Hide Details")).toBeInTheDocument();

  // Simulate another click
  fireEvent.click(EventComponent.getByText("Hide Details"));

  // Check if the text changes back to "Show Details"
  expect(EventComponent.getByText("Show Details")).toBeInTheDocument();
  });
});