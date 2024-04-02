export default function CustomPage() {  
  return (
    <main className="min-h-screen bg-green-50 text-gray-700 flex flex-col justify-between p-10">
      {/* Header */}
      <header className="text-center my-10">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-400">
          新しいタイトル
        </h1>
        <<</h1>
        <p className="text-xl mt-4 font-semibold italic text-green-600">
          Reconnect with the Earth and find happiness.
        </p>
      </header>

      {/* Content */}
      <section className="mb-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-5 text-green-500">Discover Tranquility:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 max-w-sm bg-green-100 rounded-lg border border-green-300 shadow-md">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-800">
                🌿 Zen Gardens
              </h5>
              <p className="font-normal text-gray-600">
                Explore the soothing simplicity of Zen gardens for a meditative retreat.
              </p>
            </div>
            <div className="p-6 max-w-sm bg-green-100 rounded-lg border border-green-300 shadow-md">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-800">
                🏞️ Eco Trails
              </h5>
              <p className="font-normal text-gray-600">
                Wander through untouched paths where nature sings the songs of the earth.
              </p>
            </div>
            {/* Add more nature-inspired elements or sections here as desired */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-10 text-lg text-green-700">
        Living and creating with respect for nature. 🌱
        {/* Keeping it simple and related to the theme */}
      </footer>
    </main>
  );
}
