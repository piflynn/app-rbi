import { AppRbiPage } from './app.po';

describe('app-rbi App', () => {
  let page: AppRbiPage;

  beforeEach(() => {
    page = new AppRbiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
