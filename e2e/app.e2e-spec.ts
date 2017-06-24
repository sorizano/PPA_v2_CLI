import { Ppav2Page } from './app.po';

describe('ppav2 App', () => {
  let page: Ppav2Page;

  beforeEach(() => {
    page = new Ppav2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
