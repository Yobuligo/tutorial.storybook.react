import { ILesson } from "../lessons/ILesson";

export interface IMasterProps {
  onLessonSelected: (lesson: ILesson) => void;
}
