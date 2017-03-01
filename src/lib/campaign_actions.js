import request from '../utils/request';

export default class campaign_actions {

  start({campaign_id,adtype}) {
    let url = 'https://userpanel.ero-advertising.com/apitool/advertiser/roncampaigns/activate';
    let p = request.post(url).query({
      hash: this.apiKey,
      id: campaign_id,
      adtype: adtype,
    }).set('Accept', 'application/json').end();
    return p.then(res => res.body);
  }

  pause({campaign_id,adtype}) {
    let url = 'https://userpanel.ero-advertising.com/apitool/advertiser/roncampaigns/deactivate';
    let p = request.post(url).query({
      hash: this.apiKey,
      id: campaign_id,
      adtype: adtype,
    }).set('Accept', 'application/json').end();
    return p.then(res => res.body);
  }

}
