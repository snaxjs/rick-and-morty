import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";
import React from "react";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    classNames: [],
    isLoading: false,
    text: "Button",
    disabled: false,
    variant: "primary",
  },
  render: (args) => <Button {...args} />,
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
  },
  render: (args) => <Button {...args} />,
};
