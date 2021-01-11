import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SignIn } from '../../pages/SignIn';

export default {
  title: 'pages/SignIn',
  component: SignIn,
} as Meta;

const Template: Story = (args) => <SignIn {...args} />;

export const SignInStory = Template.bind({});
