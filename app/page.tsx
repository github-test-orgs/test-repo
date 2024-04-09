export default function CustomPage() {  
  return (
    <main className="min-h-screen bg-purple-100 text-gray-800 flex flex-col justify-between p-10">
      {/* Header */}
      <header className="text-center my-10">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400">
          Embrace the Night Sky.
        </h1>
        <p className="text-xl mt-4 font-semibold italic text-purple-600">
          Discover the magic that awaits under the stars.
        </p>
      </header>

      {/* Content */}
      <section className="mb-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-5 text-purple-500">Journey to the Cosmos:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 max-w-sm bg-purple-200 rounded-lg border border-purple-300 shadow-md">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-purple-800">
                🌌 Stargazing Expeditions
              </h5>
              <p className="font-normal text-gray-600">
                Embark on awe-inspiring adventures to witness the wonders of distant galaxies.
              </p>
            </div>
            <div className="p-6 max-w-sm bg-purple-200 rounded-lg border border-purple-300 shadow-md">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-purple-800">
                🚀 Space Exploration
              </h5>
              <p className="font-normal text-gray-600">
                Dive into the mysteries of the cosmos with thrilling space exploration missions.
              </p>
            </div>
            {/* Add more celestial-inspired elements or sections here as desired */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-10 text-lg text-purple-700">
        Dreaming and reaching for the stars. 🌠
        {/* Keeping it simple and related to the theme */}
      </footer>
    </main>
  );
}
