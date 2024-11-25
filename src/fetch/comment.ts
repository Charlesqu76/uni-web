import { NewComment, Comment } from "@/types/comment";
import { myFetch } from "@/util/fetch";

export const addComment = (payload: NewComment) => {
  return myFetch.post("comment", payload);
};

export const getComments = (payload: string) => {
  return myFetch.get<Comment[]>("comment", { rollId: payload });
};
