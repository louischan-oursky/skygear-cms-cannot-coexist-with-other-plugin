function skygearCMSConfig(nga, title, base_api_url) {
  var admin = nga.application(title).baseApiUrl(base_api_url);
  return admin;
}

if (typeof module !== 'undefined') {
  module.exports = skygearCMSConfig;
}
