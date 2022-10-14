import { ILesson } from "../lessons/ILesson";

export interface ILessonProps {
  key: number;
  lesson: ILesson;
  onClick: (lesson: ILesson) => void;
}
