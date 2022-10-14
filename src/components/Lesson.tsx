import { ILessonProps } from "./ILessonProps";
import './Lesson.css'

export const Lesson = (props: ILessonProps) => {
  const onClickHandler = () => {
    props.onClick(props.lesson);
  };

  return (
    <div className="lesson">
      <div>{props.lesson.title}</div>
      <button onClick={onClickHandler}>Enter</button>
    </div>
  );
};
