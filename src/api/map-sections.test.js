/* eslint-disable no-unused-vars */
import {
  mapSections,
  mapSectionTwoColumns,
  mapSectionContent,
  mapTextGrid,
  mapImageGrid,
} from './map-sections';

import fakeData from './dados.json';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should render sections with correct data', () => {
    const data = mapSections(fakeData[0].sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });

  it('should test sections with invalid data', () => {
    const withNoTextOrImage = mapSections([
      {
        __component: 'section.secton-grid',
      },
    ]);

    const withNoComponent = mapSections([{}]);

    expect(withNoTextOrImage).toEqual([{ __component: 'section.secton-grid' }]);
    expect(withNoComponent).toEqual([{}]);
  });

  it('should test sections grid with no text_grid or image_grid', () => {
    const withNoTextOrImage = mapSections([
      {
        __component: 'section.secton-grid',
        text_grid: [{}],
        image_grid: [{ image: {} }],
      },
      {
        __component: 'section.secton-grid',
        image_grid: [{ image: {} }],
      },
    ]);
    expect(withNoTextOrImage.length).toBe(2);
  });

  it('should map section two columns', () => {
    const data = mapSectionTwoColumns();

    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.text).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.sectionId).toBe('');
  });

  it('should map section two columns', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'January brings us Firefox 85',
      description: 'Descrição',
      metadata: {
        background: true,
        section_id: 'home',
      },
      image: {
        alternativeText: 'Desenho de pessoas segurando logos do CSS, JS e HTML',
        url: 'a.svg',
      },
    });

    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.title).toBe('January brings us Firefox 85');
    expect(data.text).toBe('Descrição');
    expect(data.srcImg).toBe('a.svg');
    expect(data.sectionId).toBe('home');
  });

  it('should map section content with no data', () => {
    const section = mapSectionContent();
    expect(section.background).toBe(false);
    expect(section.component).toBe('');
    expect(section.title).toBe('');
    expect(section.html).toBe('');
    expect(section.sectionId).toBe('');
  });

  it('should map section content with data', () => {
    const section = mapSectionContent({
      __component: 'section.section-content',
      title: 'news coverage and some surprises',
      content: '<p>Ola mundo</p>',
      metadata: {
        background: false,
        name: 'intro',
        section_id: 'intro',
      },
    });
    expect(section.background).toBe(false);
    expect(section.component).toBe('section.section-content');
    expect(section.title).toBe('news coverage and some surprises');
    expect(section.html).toBe('<p>Ola mundo</p>');
    expect(section.sectionId).toBe('intro');
  });

  it('should map section grid-text with no content', () => {
    const section = mapTextGrid();
    expect(section.background).toBe(false);
    expect(section.component).toBe('section.section-grid-text');
    expect(section.title).toBe('');
    expect(section.description).toBe('');
    expect(section.sectionId).toBe('');
    expect(section.grid).toEqual([]);
  });

  it('should map section grid-text with content', () => {
    const section = mapTextGrid({
      __component: 'section.section-grid',
      description: 'Descrição',
      title: 'My Grid',
      text_grid: [
        {
          title: 'Teste 1',
          description: 'abc',
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        section_id: 'grid-one',
      },
    });
    expect(section.background).toBe(true);
    expect(section.component).toBe('section.section-grid-text');
    expect(section.title).toBe('My Grid');
    expect(section.description).toBe('Descrição');
    expect(section.sectionId).toBe('grid-one');
    expect(section.grid[0].title).toEqual('Teste 1');
    expect(section.grid[0].description).toEqual('abc');
  });

  it('should map section grid-image with no content', () => {
    const section = mapImageGrid();
    expect(section.background).toBe(false);
    expect(section.component).toBe('section.section-grid-image');
    expect(section.title).toBe('');
    expect(section.description).toBe('');
    expect(section.sectionId).toBe('');
    expect(section.grid).toEqual([]);
  });

  it('should map section grid-image with content', () => {
    const section = mapImageGrid({
      __component: 'section.section-grid',
      description: 'abc',
      title: 'Gallery',
      text_grid: [],
      image_grid: [
        {
          image: {
            alternativeText: 'Uma paisagem com céu claro e montanhas bonitas',
            url: 'url1',
          },
        },
      ],
      metadata: {
        background: false,
        name: 'gallery',
        section_id: 'gallery',
      },
    });
    expect(section.background).toBe(false);
    expect(section.component).toBe('section.section-grid-image');
    expect(section.title).toBe('Gallery');
    expect(section.description).toBe('abc');
    expect(section.sectionId).toBe('gallery');
    expect(section.grid[0].srcImg).toEqual('url1');
    expect(section.grid[0].altText).toEqual(
      'Uma paisagem com céu claro e montanhas bonitas',
    );
  });
});
