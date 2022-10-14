import { ILesson } from "./ILesson";

const CreateAComponent = () => {
  return <div>Hello World</div>;
};

export class CreateAComponentLesson implements ILesson {
  key: number = 1;
  title: string = "Create a Component";
  description: string =
    "The simplest way to create a component is to use a function that returns JSX (JavaScript XML) It later can be embedded in another component";
  component: JSX.Element = (<CreateAComponent />);
}
