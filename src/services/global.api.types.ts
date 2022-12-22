export type iAuthError = {
  status: number;
  message: string | undefined;
};

export type iStream = {
  id: string;
  name: string;
  image: string;
};

export type iChannel = {
  id: string;
  channel_id: string;
  server_id: string;
  name: string;
  stream_limit: number;
  stream_info: Array<iStream>;
};
