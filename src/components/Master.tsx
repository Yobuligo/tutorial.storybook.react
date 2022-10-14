import { CreateAComponentLesson } from "../lessons/01 CreateAComponentLesson";
import { EmbedAComponentLesson } from "../lessons/02 EmbedAComponentLesson";
import { ShowVariableValueAsContentLesson } from "../lessons/03 ShowVariableValueAsContentLesson";
import { InjectPropertyLesson } from "../lessons/04 InjectPropertyLesson";
import { IMasterProps } from "./IMasterProps";
import { Lesson } from "./Lesson";

export const Master = (props: IMasterProps) => {
  const lessons = [
    new CreateAComponentLesson(),
    new EmbedAComponentLesson(),
    new ShowVariableValueAsContentLesson(),
    new InjectPropertyLesson(),
  ];

  const items = lessons.map((entry) => {
    return (
      <Lesson
        key={entry.key}
        lesson={entry}
        onClick={(lesson) => {
          props.onLessonSelected(lesson);
        }}
      />
    );
  });

  return <div>{items}</div>;
};
