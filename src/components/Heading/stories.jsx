import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Qualquer coisa',
    uppercase: false,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
export const Dark = (args) => <Heading {...args} />;

export const Light = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
    darkFont: true,
  },
};

Dark.args = {
  colorDark: false,
  darkFont: false,
};
