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
    const startTime = new Date(allEvents[0].start.dateTime).toLocaleTimeString();
    const regex = new RegExp(`Time: ${startTime} -`, 'i');
    expect(EventComponent.getByText(regex)).toBeInTheDocument();
  });

  test("by default, event's details section should be hidden", () => {
    expect(EventComponent.container.querySelector(".details")).not.toBeInTheDocument();
  });
  
  test("toggles between show and hide details when clicked", () => {
    // Check initial state
    expect(EventComponent.getByText("Show details")).toBeInTheDocument();

    // Simulate a click
    fireEvent.click(EventComponent.getByText("Show details"));

    // Check the state after the click
    expect(EventComponent.getByText("Hide details")).toBeInTheDocument();

    // Simulate another click
    fireEvent.click(EventComponent.getByText("Hide details"));

    // Check if the text changes back to "show details"
    expect(EventComponent.getByText("Show details")).toBeInTheDocument();
  });
});