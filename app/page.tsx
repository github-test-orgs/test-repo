import Image from 'next/image';

export default function CustomPage() {
  return (
<main className="min-h-screen bg-gray-100 text-gray-800 flex flex-col justify-between p-10">
      {/* Header */}
      <header className="text-center my-10">
        <h1 className="text-4xl font-bold">Welcome to Your Custom Page</h1>
        <p className="text-lg mt-4">This is a simple Next.js page layout.</p>
      </header>

      {/* Content */}
      <section className="mb-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-5">Why Next.js is awesome:</h2>
          <ul className="list-disc list-inside">
            <li>Server-side rendering</li>
            <li>Static site generation</li>
            <li>API routes</li>
            <li>Built-in CSS and Sass support</li>
            <li>And much more...</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-10">
        Powered by{' '}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Next.js
        </a>
        {' '}and{' '}
        <a
          className="text-blue-500 hover:underline"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="hidden">Vercel</span>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </main>
  );
}