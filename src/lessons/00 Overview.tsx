import { ILesson } from "./ILesson";

export class OverviewLesson implements ILesson {
  key: number = 0;
  title: string = "Overview";
  description: string = "Overview";
  component: JSX.Element = (<div></div>);
}
