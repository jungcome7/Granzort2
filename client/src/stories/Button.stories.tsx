import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button } from '../components/common/Button';
import { ButtonProps } from '../components/common/Button/Button';

export default {
  title: 'common/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const ButtonTest = Template.bind({});
ButtonTest.args = {
  children: '라벨',
};
