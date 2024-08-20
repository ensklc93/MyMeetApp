import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';
import App from '../App';
import Event from '../components/Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    test('When the user is on the events page, don’t show the event details.', ({ given, when, then }) => {

        let AppComponent;
        given('the user is on the events page', () => {
            AppComponent = render(<App />);
        });
        
        let eventListItems;
        when('the events are displayed', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                eventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(eventListItems.length).toBe(32);
            });
        });

        then('the event details should be collapsed by default', async () => {
            const allEvents = await getEvents();
            const EventComponent = render(<Event event={allEvents[0]} />);
            expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
        });
    });


    test('When the user clicks on an event, show the details of the clicked event.', ({ given, when, then }) => {

        
        given('the user is on the events page', () => {
            const AppComponent = render(<App />);
        });

        let EventComponent;
        when('the user clicks on an event', async () => {
            const user = userEvent.setup();
            const allEvents = await getEvents();
            EventComponent = render(<Event event={allEvents[0]} />);
            const showDetailsButton = EventComponent.queryByText('show details');

            await user.click(showDetailsButton);
        });

        then('the event details should be expanded', () => {
            const eventDetails = EventComponent.container.querySelector('.details');
            expect(eventDetails).toBeInTheDocument(); 
        });
    });
 
    test('When the user click on an event a second time, hide the details of the event.', ({ given, when, then }) => {

        let EventComponent;
        let showDetailsButton;
        let user;
        given('the event details are expanded', async () => {
            user = userEvent.setup();
            const allEvents = await getEvents();

            EventComponent = render(<Event event={allEvents[0]} />);
            showDetailsButton = EventComponent.queryByText('show details');

            await user.click(showDetailsButton);

            const eventDetails = EventComponent.container.querySelector('.details');
            expect(eventDetails).toBeInTheDocument();
        });

        when('the user clicks on the event again', async () => {
            await user.click(showDetailsButton);
        });

        then('the event details should be collapsed', () => {
            const eventDetails = EventComponent.container.querySelector('.details');
            expect(eventDetails).not.toBeInTheDocument(); 
        });
    });
});