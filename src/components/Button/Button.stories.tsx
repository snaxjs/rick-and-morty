import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";
import React from "react";

const meta: Meta<typeof Button> = {
  title: "Buttons ",
  component: Button,
  argTypes: {
    isLoading: {
      type: "boolean",
      description: "boolean",
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => (
    <div>
      <div style={{ margin: 20 }}>
        <Button
          isLoading={false}
          text="Button"
          onClick={() => console.log("click")}
        />
      </div>
      <div style={{ margin: 20 }}>
        <Button
          isLoading={true}
          text="Button"
          onClick={() => console.log("click!")}
        />
      </div>
    </div>
  ),
};
