export type iAuthError = {
  status: number;
  message: string | undefined;
};

export type iChannel = {
  id: string;
  name: string;
  channel_id: string;
  stream_limit: number;
  stream_id: Array<string>;
};
