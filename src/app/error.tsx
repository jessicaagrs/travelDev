'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

type ErrorProps = {
  error: Error;
};

const ErrorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-12"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    />
  </svg>
);

const ErrorPage: React.FC<ErrorProps> = ({ error }) => {
  const router = useRouter();
  const reset = () => {
    router.push('/');
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-2xl text-custom900 font-bold">Ocorreu um erro</h1>
        <ErrorIcon />
      </div>
      <p className="text-lg text-custom900 font-normal">
        Detalhes: {error.message}
      </p>
      <button
        className="py-2 px-4 rounded-md bg-custom200 text-custom400 hover:bg-custom1005 shadow-md transition duration-500"
        onClick={reset}
      >
        Tentar novamente
      </button>
    </div>
  );
};

export default ErrorPage;
