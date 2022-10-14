import { IDetailProps } from "./IDetailProps";

export const Detail = (props: IDetailProps) => {
  return (
    <div>
      <div>
        <h2>{props.lesson.title}</h2>
      </div>
      <div>{props.lesson.description}</div>
      <div>{props.lesson.component}</div>
    </div>
  );
};
