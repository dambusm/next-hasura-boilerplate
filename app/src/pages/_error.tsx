import { ErrorProps } from 'next/dist/pages/_error';

export default function Error(props: ErrorProps) {
  return (
    <div
      style={{
        marginTop: '30vh',
        textAlign: 'center',
      }}
    >
      <h1>Something went wrong</h1>
      <p>
        We're sorry, an unexpected error occurred. Please refresh or try again
        later.
      </p>
    </div>
  );
}
