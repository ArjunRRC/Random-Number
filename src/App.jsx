import { useState } from 'react'
import './index.css'

function App() {

  const [randomNumber, setRandomNumber] = useState(null)

  const handleGenerate = () => {
    const newNumber = Math.floor(Math.random() * 100) + 1
    setRandomNumber(newNumber)
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-80 text-center">
          <h1 className="text-2xl font-bold text-black mb-6">
            Random Number Generator
            </h1>
          <div className="mb-6">
            {randomNumber === null ? (
              <p className="text-gray-500 font-medium">
                No number generated yet</p>)
              : (<div className="text-5xl font-bold text-blue-600">
                {randomNumber}
              </div>
              )}
          </div>

          {/* Generate Button */}
          <button onClick={handleGenerate}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200">
            Generate Random Number
          </button>
        </div>
      </div>
    </>
  )
}

export default App
