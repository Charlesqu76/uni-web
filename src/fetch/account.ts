import { myFetch } from "@/util/fetch";

export const register = (payload: string) => {
  myFetch.post("account", { email: payload });
};

export const login = (payload: string) => {
  myFetch.post("account/login", { email: payload });
};
