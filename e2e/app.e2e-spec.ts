import { RoutingNgPage } from './app.po';

describe('routing-ng App', () => {
  let page: RoutingNgPage;

  beforeEach(() => {
    page = new RoutingNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
