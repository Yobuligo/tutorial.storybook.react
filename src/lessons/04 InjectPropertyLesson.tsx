import { ILesson } from "./ILesson";

const InjectProperty = () => {
  function NeedValueComponent(prop: any) {
    return <div>{prop.firstname}</div>;
  }

  return (
    <div>
      <NeedValueComponent firstname="Stacey" />
    </div>
  );
};

export class InjectPropertyLesson implements ILesson {
  key: number = 4;
  title: string = "Property Concept";
  description: string =
    "Values which are needed by a component as parameters can be injected via properties. The value has to be provided by tag attributes and can be";
  component: JSX.Element = (<InjectProperty />);
}
