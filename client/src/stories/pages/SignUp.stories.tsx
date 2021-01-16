import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SignUp } from '../../pages/SignUp';

export default {
  title: 'pages/SignUp',
  component: SignUp,
} as Meta;

const Template: Story = (args) => <SignUp {...args} />;

export const SignUpStory = Template.bind({});
