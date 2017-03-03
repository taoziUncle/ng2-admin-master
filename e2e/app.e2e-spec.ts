import { MyNg2CliPage } from './app.po';

describe('my-ng2-cli App', function() {
  let page: MyNg2CliPage;

  beforeEach(() => {
    page = new MyNg2CliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
