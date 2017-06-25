import { WebRayPage } from './app.po';

describe('web-ray App', () => {
  let page: WebRayPage;

  beforeEach(() => {
    page = new WebRayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
