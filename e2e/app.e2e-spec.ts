import { Ng2CalendarPage } from './app.po';

describe('ng2-calendar App', function() {
  let page: Ng2CalendarPage;

  beforeEach(() => {
    page = new Ng2CalendarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
