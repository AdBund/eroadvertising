import campaign_actions from './lib/campaign_actions';

export default class PopAds {
  constructor(apiKey) {
    this.actions = new campaign_actions(apiKey);
  }
}
