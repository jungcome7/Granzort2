import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Main } from '../../pages/Main';

export default {
  title: 'pages/Main',
  component: Main,
} as Meta;

const Template: Story = (args) => <Main {...args} />;

export const MainStory = Template.bind({});