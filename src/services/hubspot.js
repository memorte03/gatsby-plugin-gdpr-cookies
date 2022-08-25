const {
  validHubspotTrackingId,
  getCookie
} = require('../helper')

exports.addHubspot = (options) => {
  return new Promise((resolve, reject) => {
    if (window.gatsbyPluginGDPRCookiesHubspotAdded) return resolve(true)

    const head = document.getElementsByTagName('head')[0]
    const script = document.createElement(`script`)
    script.type = `text/javascript`
    script.id = 'hs-script-loader'
    script.key = 'gatsby-plugin-hubspot'
    script.async = true
    script.defer = true
    script.onload = () => {
      window.gatsbyPluginGDPRCookiesHubspotAdded = true
      resolve(true)
    }
    script.src = `//js.hs-scripts.com/${options.trackingId}.js`

    head.appendChild(script);
  })
}

exports.initializeHubspot = (options) => {
  if (
    !window.gatsbyPluginGDPRCookiesHubspotInitialized &&
    getCookie(options.cookieName) === `true` &&
    validHubspotTrackingId(options)
  ) {
    // (function(){
    var _hsq = window._hsq = window._hsq || [];
    _hsq.push(['setPath', window.location.pathname + window.location.search + window.location.hash]);
    `${
      options.respectDNT
        ? `
                  if (window.doNotTrack || navigator.doNotTrack || navigator.msDoNotTrack || 'msTrackingProtectionEnabled' in window.external) {
                    if (window.doNotTrack == '1' || navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1' || navigator.msDoNotTrack == '1' || window.external.msTrackingProtectionEnabled()) {
                      _hsq.push(['doNotTrack']);
                    }
                  }
                `
        : ``
    }`
    // })();

    window.gatsbyPluginGDPRCookiesHubspotInitialized = true
  }
}
