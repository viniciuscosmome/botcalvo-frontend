export default {
  cookie: {
    token_name: 'botcalvinho.token',
    token_expires: (): Date => new Date(new Date().getTime() + 1 * 60 * 6e4),
  },
  api: {
    base_url: process.env.NEXT_PUBLIC_API_BASEURL,
  }
};
