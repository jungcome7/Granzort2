import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Header } from '../../components/Header';

export default {
  title: 'components/Header',
  component: Header,
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const HeaderStory = Template.bind({});
