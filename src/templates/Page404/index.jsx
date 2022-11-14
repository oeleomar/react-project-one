import { GridContent } from '../../components/GridContent';

export const Page404 = () => {
  return (
    <GridContent
      title="Error 404"
      html='<p>A página não foi encontrada. <a href="/">Clique para voltar </a></p>'
    />
  );
};
