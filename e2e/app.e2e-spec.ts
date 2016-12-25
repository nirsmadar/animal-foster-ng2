import { AnimalFosterNg2Page } from './app.po';

describe('animal-foster-ng2 App', function() {
  let page: AnimalFosterNg2Page;

  beforeEach(() => {
    page = new AnimalFosterNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
