import Image from "next/image";
import Page from "./section/Page";

export default function Home() {
  return (
    <main>
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h2
          className="text-3xl leading-tight font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight bg-clip-text bg-gradient-to-r from-blue-600
           to-fuchsia-700 text-transparent"
        >
          Simple, transparent pricing
        </h2>
        <p className="mt-2 lg:text-lg text-gray-800 dark:text-neutral-200">
          Whatever your status, our offers evolve according to your needs.
        </p>
      </div>
      <Page />
    </main>
  );
}
