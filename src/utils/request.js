import Promise from 'bluebird';
import superagent from 'superagent';
import superagentPromise from 'superagent-promise';

const request = superagentPromise(superagent, Promise);

export default request;
