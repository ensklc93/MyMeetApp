import { render } from "@testing-library/react";
import Event from "../components/Event";
import { getEvents } from '../api';
import userEvent from "@testing-library/user-event"


describe("<Event /> component", () => {
   
    test("Event details are collapsed by default", async () => {
        const allEvents = await getEvents();
        const event = allEvents[0];
        const EventComponent = render(<Event event={event} />)

        expect(EventComponent.queryByText(event.description)).not.toBeInTheDocument();
    })

    test("Event details expand when the event is clicked by user", async () => {
        const user = userEvent.setup()
        const allEvents = await getEvents();
        const event = allEvents[0];
        const EventComponent = render(<Event event={event} />)

        const eventTitle = EventComponent.queryByText(event.summary)
        await user.click(eventTitle)

        expect(EventComponent.getByText(event.description)).toBeInTheDocument();
    })

    test("Event details collapse when the event is clicked again", async () => {
        const user = userEvent.setup()
        const allEvents = await getEvents();
        const event = allEvents[0];
        const EventComponent = render(<Event event={event} />)

        const eventTitle = EventComponent.queryByText(event.summary)
        await user.click(eventTitle)

        await user.click(eventTitle)

        expect(EventComponent.queryByText(event.description)).not.toBeInTheDocument();
    });
  
  });