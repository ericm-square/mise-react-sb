import Notice from '../../ui/Notice/Notice';

export interface IErrorInputProps {
  id?: string;
  label?: string;
  message?: string;
}

export default function ErrorInput(props: IErrorInputProps) {
  const { id, message } = props;
  return <Notice id={`${id}__error`} variant='critical' title='' message={message ?? ''} bannerStyle="inline" />;
}
