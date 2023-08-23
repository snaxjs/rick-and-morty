import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";
import React from "react";

// const meta: Meta<typeof Button> = {
//   component: Button,
// };

const meta = {
  title: "Buttons Rick and Morty",
  component: Button,
  argTypes: {
    isLoading: {
      type: "boolean",
      description: "boolean",
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;
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

// export const Primary_WithSpinner: Story = {
//   render: () => (
//     <Button
//       isLoading={true}
//       text="Button"
//       onClick={() => console.log("click!")}
//     />
//   ),
// };
