export type NewComment = {
  content: string;
  rollId: number | string;
};

export type Comment = { commentId: number; create_at: string } & NewComment;
