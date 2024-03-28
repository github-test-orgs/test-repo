export default function CustomPage() {  
  return (
    <main className="min-h-screen bg-pink-300 text-green-800 flex flex-col justify-between p-10">
      {/* Header */}
      <header className="text-center my-10">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Welcome to the Oddity Oasis!
        </h1>
        <p className="text-xl mt-4 font-semibold italic text-yellow-500">
          A little corner of the web where normal is boring.
        </p>
      </header>

      {/* Content */}
      <section className="mb-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-5 text-orange-400">Feast Your Eyes:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 max-w-sm bg-green-200 rounded-lg border border-green-400 shadow-md dark:bg-green-800 dark:border-green-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                🌈 Rainbow Spaghetti
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Ever wondered what rainbows taste like? Wonder no more!
              </p>
            </div>
            <div className="p-6 max-w-sm bg-blue-200 rounded-lg border border-blue-400 shadow-md dark:bg-blue-800 dark:border-blue-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                🪐 Disco Planets
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Planets, but make it disco. A celestial party in your room.
              </p>
            </div>
            {/* Feel free to add more quirky things here */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-10 text-lg text-purple-700">
        Created with 💖 and a dash of 🪄 in the Oddity Oasis.
        {/* Omitting external links for brevity */}
      </footer>
    </main>
  );
}
