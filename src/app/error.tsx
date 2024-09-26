"use client";

import { useEffect } from "react";

export default function error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[75vh] md:h-[90vh] px-24 text-center text-white bg-black grid place-content-center">
      <h1 className="text-7xl md:text-[8rem] rainbow-neon text-center">
        OOPS!
      </h1>
      <p className="mt-4 md:mt-0 mb-12">Something unexpected happened !</p>
      <div className="px-8">
        <button
          id="btn"
          className="text-sm md:text-base"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </main>
  );
}
