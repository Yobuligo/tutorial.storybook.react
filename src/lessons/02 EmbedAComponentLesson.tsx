import { ILesson } from "./ILesson";

const EmbedAComponent = () => {
  return (
    <div>
      <h1>Hello World embedded</h1>
    </div>
  );
};

const RootComponent = () => {
  return (
    <div>
      <EmbedAComponent />
    </div>
  );
};

export class EmbedAComponentLesson implements ILesson {
  key: number = 2;
  title: string = "Embed a component";
  description: string =
    "A component can be simply embedded by using it like a normal HTML tag";
  component: JSX.Element = (<RootComponent />);
}
