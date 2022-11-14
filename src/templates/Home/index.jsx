import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

//import * as Styled from './styles';
import { mapData } from '../../api/map-data';
import config from '../../config';

import { Base } from '../Base';
import { Page404 } from '../Page404';
import { Loading } from '../Loading';

import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

export const Home = () => {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);
  const location = useLocation();

  useEffect(() => {
    const load = async () => {
      const pathName = location.pathname.replace(/[^a-z0-9-_]/gi, '');
      const slug = pathName ? pathName : config.defaultPage;

      try {
        const data = await fetch(`${config.url}${slug}`);
        const json = await data.json();

        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);
        setData(pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };
    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, [location]);

  useEffect(() => {
    if (data === undefined) {
      document.title = `Página não encontrada | ${config.siteName}`;
    }

    if (data && !data.slug) {
      document.title = `Carregando... | ${config.siteName}`;
    }

    if (data && data.title) {
      document.title = `${data.title} | ${config.siteName}`;
    }
  }, [data]);

  if (data === undefined) {
    return <Page404 />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }
  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;
  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index + 1}`;
        if (component === 'section.section-two-columns') {
          return <GridTwoColumn key={key} {...section} />;
        }

        if (component === 'section.section-one-colum') {
          return <GridContent key={key} {...section} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...section} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
};
