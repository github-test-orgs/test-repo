import Image from 'next/image';

export default function CustomPage() {  
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 flex flex-col justify-between p-10">
      {/* Header */}
      <header className="text-center my-10">
        <h1 className="text-4xl font-bold">Embark on Your Mindfulness Journey</h1>
        <p className="text-lg mt-4">Discover the path to inner peace and personal growth.</p>
      </header>

      {/* Content */}
      <section className="mb-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-5">Why Mindfulness and Meditation Matter:</h2>
          <ul className="list-disc list-inside">
            <li>Enhances focus and concentration</li>
            <li>Reduces stress and anxiety levels</li>
            <li>Improves emotional health and well-being</li>
            <li>Supports a stronger immune system</li>
            <li>Fosters a deeper sense of empathy and connection</li>
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
