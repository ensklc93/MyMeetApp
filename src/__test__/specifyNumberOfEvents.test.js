import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('When the user has not specified the number of event, show 32 events by default.', ({ given, when, then }) => {

        let AppComponent;
        given('the user is on the events page', () => {
            AppComponent = render(<App />);
        });

        when('the number of events to display are not specified', () => {
        });

        then(/^(\d+) events should be displayed by default$/, async (numberOfEvents) => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const eventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(eventListItems.length).toBe(32);
            });
        });
    });

    test('User should see a list of 10 events, when they specified it to 10.', ({ given, when, then }) => {

        let AppComponent;
        given('the user is on the events page', () => {
            AppComponent = render(<App />);
        });

        let AppDOM
        when(/^the user specifies the number of events to display as (\d+)$/, async (numberOfEvents) => {
            const user = userEvent.setup();
            AppDOM = AppComponent.container.firstChild;
            const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
            const NumberOfEventsInput = within(NumberOfEventsDOM).queryByRole('textbox');

            await user.type(NumberOfEventsInput, `{backspace}{backspace}10`)
        });

        then(/^(\d+) events should be displayed$/, async (numberOfEvents) => {
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
              const EventListItems = within(EventListDOM).queryAllByRole('listitem');
              expect(EventListItems.length).toBe(10);
            });
        });
    });
});