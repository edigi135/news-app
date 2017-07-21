/**
 * Server Gateway
 */

import axios from 'axios';
import config from './config';

const http = axios.create({ baseURL: config.baseURL });

export default {
  getSources () {
    return http.get('/sources', {
      params: {
        language: 'en',
        apiKey: config.apiKey
      }
    }).then(res => {
      return res.data.sources;
    });
  },
  getArticles (source) {
    return http.get('/articles', {
      params: {
        source: source,
        apiKey: config.apiKey,
        sortBy: 'top'
      }
    }).then(res => {
      return res.data.articles;
    });
  }
};
