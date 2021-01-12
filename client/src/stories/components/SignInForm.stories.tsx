import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SignInForm } from '../../components/SignInForm';

export default {
  title: 'components/SignInForm',
  component: SignInForm,
} as Meta;

const Template: Story = (args) => <SignInForm {...args} />;

export const SignInFormStory = Template.bind({});
