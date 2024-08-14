import { render, screen, waitFor } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents"
import { getEvents } from '../api';
import userEvent from "@testing-library/user-event"



describe("<NumberOfEvents /> component", () => {

  test("Display 32 event by default if user has not specified the number of events to display", async () => {
    const allEvents = await getEvents(); 
    const NumberOfEventsComponent = render(<NumberOfEvents events={allEvents} />)

    const displayedEvents = NumberOfEventsComponent.queryAllByRole('listitem')
    expect(displayedEvents).toHaveLength(32);
  })

  test("Display 10 events if the user has set the number of events to be displayed to 10", async () => {
    const user = userEvent.setup();
    const allEvents = await getEvents(); 
    render(<NumberOfEvents events={allEvents} />);

    const input = screen.getByPlaceholderText('events');
  
    expect(input).toBeInTheDocument();

    await user.clear(input);
    await user.type(input, '10');

    await waitFor(() => {
      expect(input).toHaveValue('10');
    });

    console.log(input);

    await waitFor(() => {
      const displayedEvents = screen.queryAllByRole('listitem');
      expect(displayedEvents).toHaveLength(10);
    });
  });
})
