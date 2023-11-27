import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import CharCard from "./index";

const meta: Meta<typeof CharCard> = {
  component: CharCard,
};

export default meta;
type Story = StoryObj<typeof CharCard>;

export const NoImage: Story = {
  args: {
    from: "Some location",
    image: "not_found",
    species: "Some species",
    classNames: [],
    gender: "male",
    status: "alive",
    name: "Rick Sanchez",
  },
  render: (args) => <CharCard {...args} />,
};

export const WithImage: Story = {
  args: {
    from: "Some location",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    species: "Some species",
    classNames: [],
    gender: "male",
    status: "alive",
    name: "Rick Sanchez",
  },
  render: (args) => <CharCard {...args} />,
};
