import { react, render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as TaskListStories from './TaskList.stories'; // 👈 our stories imported here

const { WithPinnedTasks } = composeStories(TaskListStories);

it('renders pinned tasks at the start of the list', () => {
    const { container } = render(<WithPinnedTasks />);


    expect(
        container.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]')
    ).not.toBe(null);

});