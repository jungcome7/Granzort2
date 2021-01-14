import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Heart from '../../components/icons/Heart';

export default {
  title: 'components/icons/Heart',
  component: Heart,
} as Meta;

const Template: Story = (args) => <Heart {...args} />;

export const HeartStory = Template.bind({});
