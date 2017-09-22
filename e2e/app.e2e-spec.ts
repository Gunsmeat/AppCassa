import { AppCassaPage } from './app.po';

describe('app-cassa App', function() {
  let page: AppCassaPage;

  beforeEach(() => {
    page = new AppCassaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
