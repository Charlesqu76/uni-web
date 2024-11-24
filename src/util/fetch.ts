import { GetServerSidePropsContext } from "next";

type HttpMethod = "GET" | "POST";

interface FetchOptions {
  method: HttpMethod;
  headers?: Record<string, string>;
  params?: Record<string, string>;
  body?: any;
}

interface FetchResult<T> {
  data: T | null;
  error: Error | null;
}

const buildQueryParams = (params: Record<string, string>): string => {
  const queryString = new URLSearchParams(params).toString();
  return queryString ? `?${queryString}` : "";
};

export const HOST =
  process.env.NODE_ENV === "production"
    ? "https://charlescrazy.fun/"
    : "http://127.0.0.1:3001/";

// const HOST = "https://charlescrazy.fun/";

const prefix = "api/";

export const MY_PATH = HOST + prefix;

const defaultHeaders = {
  "Content-Type": "application/json",
};

const fetchUtility = async <T>(
  path: string,
  options: FetchOptions,
  ctx?: GetServerSidePropsContext
): Promise<T> => {
  let url = MY_PATH + path;

  const { method, params, body } = options;

  if (ctx) {
    // @ts-ignore
    defaultHeaders.Cookie = ctx?.req?.headers?.cookie;
  }

  const fetchOptions: RequestInit = {
    method: method,
    headers: { ...defaultHeaders, ...options.headers },
    mode: "cors",
    credentials: "include",
  };

  if (method === "GET" && params) {
    url += buildQueryParams(params);
  }

  if (method === "POST" && body) {
    fetchOptions.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, fetchOptions);
    if (!response.ok) {
      const errMsg = `${url} --->  ${response.status} ${response.statusText}`;
      if (typeof window) {
      }
      console.error(errMsg);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    return {} as any;
  }
};

export const get = async <T>(
  path: string,
  params?: Record<string, string>,
  ctx?: GetServerSidePropsContext
): Promise<T> => {
  return fetchUtility<T>(path, { method: "GET", params }, ctx);
};

export const post = async <T>(
  path: string,
  body?: Object,
  headers?: Record<string, string>
): Promise<T> => {
  return fetchUtility<T>(path, { method: "POST", body, headers });
};

export const myFetch = { get, post };
