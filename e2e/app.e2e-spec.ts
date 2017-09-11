import { ShoppingAppEdurekaPage } from './app.po';

describe('shopping-app-edureka App', () => {
  let page: ShoppingAppEdurekaPage;

  beforeEach(() => {
    page = new ShoppingAppEdurekaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
