import type { Meta, StoryObj } from '@storybook/react';
import CustomLink from './CustomLink';
import { MemoryRouter } from 'react-router-dom';

export default {
  component: CustomLink,
  title: 'Atoms/Custom Link',
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        {Story()}
      </MemoryRouter>
    )
  ]
} as Meta;

type Story = StoryObj<typeof CustomLink>;

export const CustomLinkEx: Story = {
  args: {
    children: 'Accounts',
    path: '/'
  }
};