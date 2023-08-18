import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import CharCard from "./index";

const meta: Meta<typeof CharCard> = {
  component: CharCard,
};

export default meta;
type Story = StoryObj<typeof CharCard>;

export const Primary: Story = {
  render: () => (
    <CharCard
      from="asdasd"
      status={"dead"}
      gender="male"
      name="asdasd"
      image="asdasd"
      species="asdasd"
    />
  ),
};
