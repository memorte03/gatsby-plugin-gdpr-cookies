# gatsby-plugin-gdpr-cookies

---

## 💡 This is a fork from [Andre Zimpel's `gatsby-plugin-gdpr-cookies` Gatsby plugin](https://github.com/andrezimpel/gatsby-plugin-gdpr-cookies)

---

## Install

`yarn add @mobile-reality/gatsby-plugin-gdpr-cookies`
or
`npm install @mobile-reality/gatsby-plugin-gdpr-cookies`

## How to use

```javascript
// in your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true, // default
          allowAdFeatures: false // default
        },
        googleTagManager: {
          trackingId: 'YOUR_GOOGLE_TAG_MANAGER_TRACKING_ID', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-tagmanager', // default
          dataLayerName: 'dataLayer', // default
        },
        facebookPixel: {
          pixelId: 'YOUR_FACEBOOK_PIXEL_ID', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-facebook-pixel', // default
        },
        tikTokPixel: {
          pixelId: 'YOUR_TIKTOK_PIXEL_ID', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-tiktok-pixel', // default
        },
        hotjar: {
          hjid: 'YOUR_HOTJAR_ID',
          hjsv: 'YOUR_HOTJAR_SNIPPET_VERSION',
          cookieName: 'gatsby-gdpr-hotjar', // default
        },
        linkedin: {
          trackingId: 'YOUR_LINKEDIN_TRACKING_ID', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-linkedin', // default
        },
        hubspot: {
          trackingId: 'YOUR_HUBSPOT_TRACKING_ID', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-hubspot', // default
        },
        googleTag: {
            trackingIds: ['YOUR_GOOGLE_TAG_IDS'],
            cookieName: 'gatsby-gpdr-google-tag'
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
  ],
}
```

## How it works

First of all the plugin checks in which environment your site is running. If it's currently running in one of your defined environments it will add the tracking code by default to the `<head>/<body>` of your site. It will not be activated or initialized by this.

By default this plugin will not send any data to Google or Facebook to make it GDPR compliant. The user first needs to accept your cookie policy. By accepting that you need to set cookies for the tracker you want to use - `gatsby-gdpr-google-analytics`, `gatsby-gdpr-google-tagmanager`, `gatsby-gdpr-facebook-pixel`. Depending on the user input the value of each of the cookies should be `true` or `false`.

If the `gatsby-gdpr-google-analytics` cookie is set to true, Google Analytics will be initialized `onClientEntry`. Same is for the Google Tag Manager and Facebook Pixel. The plugin will check if cookies for Google Analytics or Facebook Pixel have been set between route changes on `onRouteUpdate`. Reloading the page after setting the cookies is not required anymore.

The page view will be tracked on `onRouteUpdate`.

## Initialize and track
This gatsby plugin now supports initializing and tracking right after a user accepts the cookie consent.

```javascript
// in your cookie banner
import { useLocation } from "@reach/router" // this helps tracking the location
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'
```
Then you can execute `initializeAndTrack(location)` in your cookie banner callback. This will initialize the plugin with your options from the `gatsby-config.js` and then starts tracking the user based on the cookies/services are accepted.

```javascript
// in your cookie banner
const location = useLocation()
initializeAndTrack(location)
```

## Full README.md in the original lib
https://github.com/andrezimpel/gatsby-plugin-gdpr-cookies/blob/master/README.md

## Contributors

[Andre Zimpel](https://github.com/andrezimpel) - creator of the original lib https://github.com/andrezimpel/gatsby-plugin-gdpr-cookies

Thanks goes to these wonderful people who helped shaping this project.

[Simon Vanherweghe](https://github.com/SimonVanherweghe)

[Stefan Tertan](https://github.com/ColdFire87)

[Osvaldas Valutis](https://github.com/osvaldasvalutis)

[Théo](https://github.com/3theochp)

[Paul Brickles](https://github.com/pbrickles)

[Ferran Buireu](https://github.com/fbuireu)

[Daniel Spaude](https://github.com/spaudanjo)

[Hahlh B](https://github.com/Hahlh)
