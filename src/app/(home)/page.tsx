import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center max-w-2xl mx-auto">
      <img width="100" className="mx-auto" src="https://keepthefuturehuman.ai/wp-content/uploads/2025/03/KTFH-Logo-Dark.png" alt="Keep The Future Human Logo" />
      <h2 className="text-2xl font-bold mt-8">We must not build AI to replace humans.</h2>
      <p className="mt-4">Humanity is on the brink of developing artificial general intelligence that exceeds our own. It's time to close the gates on AGI and superintelligence... before we lose control of our future. Read  <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          the essay
        </Link></p>
    </main>
  );
}
