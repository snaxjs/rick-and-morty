import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";
import React from "react";

// const meta: Meta<typeof Button> = {
//   component: Button,
// };

const meta = {
  title: "Buttons Rick and Morty",
  component: Button,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {
    isLoading: {
      type: "boolean",
      description: "boolean",
      control: "boolean",
    },
    // disabled: {
    //   type: "boolean",
    //   description: "Состояние кнопки",
    //   control: "boolean",
    //   defaultValue: false,
    // },
    text: { type: "string", description: "Тест кнопки", control: "boolean" },
  },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => (
    <Button
      isLoading={false}
      text="Button"
      onClick={() => console.log("click")}
    />
  ),
};

export const Primary_WithSpinner: Story = {
  render: () => (
    <Button
      isLoading={true}
      text="Button"
      onClick={() => console.log("click!")}
    />
  ),
};
