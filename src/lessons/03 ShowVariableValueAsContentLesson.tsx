import { ILesson } from "./ILesson";

const ShowVariableValueAsContent = () => {
  const firstname = "Stacey";
  const lastname = "Starfish";

  return (
    <div>
      <div>{firstname}</div>
      <div>{lastname}</div>
    </div>
  );
};

export class ShowVariableValueAsContentLesson implements ILesson {
  key: number = 3;
  title: string = "Show variable value as content";
  description: string =
    "To not only hard code all values which have to be displayed, it is possible to show content of variables. The value has to be set in braces {}";
  component: JSX.Element = (<ShowVariableValueAsContent />);
}
