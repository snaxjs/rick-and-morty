import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';
import React from "react";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => (
      <Button
          isLoading={false}
          label='Button'
          onClick={() => console.log('click!')}
      />
  ),
};
export const Primary_WithSpinner: Story = {
  render: () => (
      <Button
          isLoading={true}
          label='Button'
          onClick={() => console.log('click!')}
      />
  ),
};