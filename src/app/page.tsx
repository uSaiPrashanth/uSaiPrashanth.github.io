import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/stormchaser-logo.svg"
          alt="StormChaser logo"
          width={220}
          height={60}
          priority
        />
        <h1 className="text-2xl font-bold">Hello, welcome to my website! I'm StormChaser.</h1>
      </main>
    </div>
  );
}
