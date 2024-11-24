export type Teacher = {
  teacherid: number;
  firstname: string;
  lastname: string;
};

export type Teachers = {
  list: {
    courseId: number;
    name: string;
    code: string;
    year: number;
    semester: number;
  }[];
} & Teacher;
