import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { AuthForm } from '../../components/AuthForm';

export default {
  title: 'components/AuthForm',
  component: AuthForm,
} as Meta;

const Template: Story = (args) => <AuthForm type="signIn" {...args} />;

export const AuthFormStory = Template.bind({});
