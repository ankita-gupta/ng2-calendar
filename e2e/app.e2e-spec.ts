import { Ng2CalenderPage } from './app.po';

describe('ng2-calender App', function() {
  let page: Ng2CalenderPage;

  beforeEach(() => {
    page = new Ng2CalenderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
