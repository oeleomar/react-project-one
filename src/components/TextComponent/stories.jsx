import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Obcaecati sed tempore quibusdam vitae sequi deserunt dolor eius,
    beatae earum corporis ipsam consequuntur molestias dignissimos
    asperiores adipisci voluptatem, id est minus!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
