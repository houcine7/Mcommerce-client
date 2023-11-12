"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/no-data.png"
          alt="no items"
          className="w-auto h-80 mx-auto  sm:h-64"
        />

        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {error.message}
        </h1>

        <p className="mt-4 text-gray-500">Something went wrong!</p>
      </div>
    </div>
  );
}
