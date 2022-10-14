export interface ILesson {
  readonly key: number;
  readonly title: string;
  readonly description: string;
  readonly component: JSX.Element;
}
