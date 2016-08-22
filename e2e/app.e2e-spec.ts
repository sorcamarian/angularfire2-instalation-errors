import { TestCliFirePage } from './app.po';

describe('test-cli-fire App', function() {
  let page: TestCliFirePage;

  beforeEach(() => {
    page = new TestCliFirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
