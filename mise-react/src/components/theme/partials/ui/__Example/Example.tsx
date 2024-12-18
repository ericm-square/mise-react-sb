/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from './Example.module.css';

export interface IExampleProps {
  text: string;
}

export default function Example(props: IExampleProps) {
  const { text } = props;

  return (
    <div>{text}</div>
  );
}
