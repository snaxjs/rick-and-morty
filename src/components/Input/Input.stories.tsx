import type { Meta, StoryObj } from "@storybook/react";
import Input from "./index";
import React from "react";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const PrimaryText: Story = {
  args: {
    classNames: [],
    value: 999,
    type: "text",
  },
  render: (args) => <Input {...args} />,
};

export const SecondaryPassword: Story = {
  args: {
    ...PrimaryText.args,
    type: "password",
  },
  render: (args) => <Input {...args} />,
};
