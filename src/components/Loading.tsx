type LoadingProps = {
  message: string;
};

const Loading = ({ message }: LoadingProps) => {
  return <div>{message}</div>;
};

export default Loading;
