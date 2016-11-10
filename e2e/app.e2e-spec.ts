import { ReduxSpeedTestPage } from './app.po';

describe('redux-speed-test App', function() {
  let page: ReduxSpeedTestPage;

  beforeEach(() => {
    page = new ReduxSpeedTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
