const JWT = {
  SECRET_KEY: 'WEJQOEJQOEJOQJOEIJQWOEJOQWJEOJQWOEJOQWJEOQWJEOJQWOIEOIQWEKP',
  EXPIRES_IN: '1d',
};

const SPOTIFY = {
  CLIENT_ID: 'b827857528e14d8a99da774dcf0bf269',
  SECRET: '56f115f43f9d4f85888ccf2967ead93f',
  REDIRECT_URI: 'localhost:8080/api/auth/spotify/callback',
  SCOPES: ['user-read-private', 'user-read-email'],
  STATE: {
    NAME: 'state',
    LENGTH: 32,
    COOKIE_MAX_AGE: 60 * 1000,
  },
};

const BOUNDARY_VALUES = {
  GROUP_CODE_LENGTH: 6,
  MAX_GROUP_SIZE: 5,
};

const ERRORS = {
  INVALID_REQUEST: 'Invalid request',
  TOKEN_EXPIRED: 'Token does not exist or it\'s expired',
};

export {
  JWT,
  BOUNDARY_VALUES,
  ERRORS,
  SPOTIFY,
};