import { Teacher, Teachers } from "@/types/teacher";
import { myFetch } from "@/util/fetch";

export const getTeachers = () => {
  return myFetch.get<Teacher[]>("teacher");
};

export const getTeacher = (payload: string) => {
  return myFetch.get<Teachers>("teacher/" + payload, { teacherId: payload });
};
