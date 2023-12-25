---
title: Authenticating with social networks and getting user data from them
date: "2019-01-08"
layout: layouts/post.njk
published: false
---

## Using Purest

The `prepareSocialAuthPayload` function from the code snippet below
will be called by the callback middleware that receives the request from the
social network. The request will contain either the `access_token` query parameter
(if the social network is using oauth2 protocol) or the `access_token` and `access_secret`
parameters (if the social network is using oauth1 protocol).

```javascript
import request from 'request';
import Purest from 'purest';
import purestConfig from '@purest/providers';

const purest = Purest({ request, promise: Promise });
const facebook = purest({
  provider: 'facebook',
  config: purestConfig
});
const twitter = purest({
  provider: 'twitter',
  config: purestConfig,
  key: '', // Twitter key for your app,
  secret: '', // Twitter secret for your app,
});
const vk = purest({
  provider: 'vk',
  config: purestConfig
});
const google = purest({
  provider: 'google',
  config: purestConfig
});

// exported function that will be called elsewhere and receive Express request object
export async function prepareSocialAuthPayload(req, provider) {
  try {
    if (provider === 'facebook') {
      return await prepareFacebookPayload(req);
    } else if (provider === 'twitter') {
      return await prepareTwitterPayload(req);
    } else if (provider === 'vkontakte') {
      return await prepareVkPayload(req);
    } else if (provider === 'google') {
      return await prepareGooglePayload(req);
    }
  } catch (error) {
    logger.error('Failed to collect social network data:', error);
  }
}

async function prepareFacebookPayload(req) {
  const { access_token } = req.query;

  const [, responseBody] = await facebook
    .get('me')
    .qs({ fields: 'name,email,picture.width(50).height(50)' })
    .auth(access_token)
    .request();

  return {
    name: responseBody.name,
    picture: responseBody.picture.data.url,
    email: responseBody.email,
    providerTokenData: {
      access_token
    },
    provider: 'Facebook'
  };
}

async function prepareTwitterPayload(req) {
  const { access_token, access_secret } = req.query;

  const [, responseBody] = await twitter
    .get('account/verify_credentials')
    .qs({ include_email: true })
    .auth(access_token, access_secret)
    .request();

  return {
    name: responseBody.name || responseBody.screen_name,
    picture: responseBody.profile_image_url_https || responseBody.profile_image_url,
    email: responseBody.email,
    providerTokenData: { // Twitter uses oauth1 protocol
      oauth_token: access_token,
      oauth_secret: access_secret
    },
    provider: 'Twitter'
  };
}

async function prepareVkPayload(req) {

  const { access_token, raw } = req.query;
  logger.info('raw from Vkontakte', JSON.stringify(raw));

  const [, responseBody] = await vk
    .get('users.get')
    .qs({ v: '5.85', fields: 'photo_50' }) // "v" for api version is a required parameter
    .auth(access_token)
    .request();

  /* VK response will have the following shape:
    { "response": [
      { "id",
        "first_name",
        "last_name",
        "photo_50""
      }
    ]}
  */

  const { first_name, last_name, photo_50 } = responseBody.response[0];

  return {
    name: `${first_name} ${last_name}`,
    picture: photo_50,
    email: raw.email, // VK returns user's email in the same response as access_token
    providerTokenData: {
      access_token
    },
    provider: 'VK'
  };
}

async function prepareGooglePayload(req) {
  const { access_token } = req.query;

  const [, responseBody] = await google
    .get('oauth2/v1/userinfo') // https://www.googleapis.com/oauth2/v1/userinfo
    .auth(access_token)
    .request();

  return {
    name: responseBody.name,
    email: responseBody.email,
    picture: responseBody.picture,
    providerTokenData: {
      access_token
    },
    provider: 'Google'
  };
}
```
