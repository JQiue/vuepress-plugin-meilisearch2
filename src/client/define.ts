declare const HOST: string;
declare const API_KEY: string;
declare const INDEX: string;
declare const LIMIT: number | undefined;
declare const OFFSET: number | undefined;
declare const FILTER: string | (string | string[])[] | undefined;

export const pluginOptions = { HOST, API_KEY, INDEX, LIMIT, OFFSET, FILTER };
