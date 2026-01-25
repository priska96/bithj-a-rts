import { FC } from "react";
import { FallbackProps } from "react-error-boundary";
import Button from "./ui/Button";

const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-main-bg px-4 text-center text-main-text">
      <h2 className="text-3xl font-bold mb-2">Something went wrong</h2>
      <p className="mb-4 text-gray-700">{error?.message}</p>
      <Button onClick={resetErrorBoundary} variant="solidPrimary">
        Try again
      </Button>
    </div>
  );
};

export default ErrorFallback;
