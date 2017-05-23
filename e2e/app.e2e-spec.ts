import { NgRouterBrokenPage } from './app.po';

describe('ng-router-broken App', () => {
  let page: NgRouterBrokenPage;

  beforeEach(() => {
    page = new NgRouterBrokenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
