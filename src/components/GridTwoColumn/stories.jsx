import { GridTwoColumn } from '.';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: {
    title: 'GridTwo Columns',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Autem a iure totam nobis nesciunt quae iusto labore pariatur,
          quia praesentium deleniti aliquam repudiandae sint natus sit
          perferendis eveniet ad delectus.`,
    srcImg: 'assets/images/logo.png',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
