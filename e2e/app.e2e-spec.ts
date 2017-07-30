import { CodemirrorAppPage } from './app.po';

describe('codemirror-app App', () => {
  let page: CodemirrorAppPage;

  beforeEach(() => {
    page = new CodemirrorAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
