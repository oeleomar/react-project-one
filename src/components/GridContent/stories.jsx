import { GridContent } from '.';
import mock from './mock';

export default {
  title: 'GridContent',
  component: GridContent,
  args: {
    title: mock.title,
    html: mock.html,
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridContent {...args} />
    </div>
  );
};
