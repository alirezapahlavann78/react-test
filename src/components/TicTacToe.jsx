// components/TicTacToe.jsx
import useTicTacToe from '../hooks/useTicTacToe'

const TicTacToe = () => {
  const { board, status, handleClick, resetGame } = useTicTacToe()

  const getCellStyle = (value) => {
    let style = "text-5xl h-24 rounded-lg transition-all duration-200 "
    if (!value) {
      style += "bg-gray-100 hover:bg-gray-200"
    } else {
      style += value === 'X' 
        ? "bg-red-100 text-red-600" 
        : "bg-blue-100 text-blue-600"
    }
    return style
  }

  return (
    <div className="p-4 text-center max-w-md mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">بازی دوز</h2>
        <div className={`text-lg font-semibold ${
          status.includes('X') ? 'text-red-600' : 
          status.includes('O') ? 'text-blue-600' : 
          'text-gray-700'
        }`}>
          {status}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={getCellStyle(cell)}
            disabled={!!cell}
          >
            {cell}
          </button>
        ))}
      </div>

      <button
        onClick={resetGame}
        className="bg-emerald-600 text-white px-6 py-2 rounded-lg
                 hover:bg-emerald-700 transition-colors duration-200
                 font-medium text-lg shadow-md"
      >
        شروع بازی جدید
      </button>
    </div>
  )
}

export default TicTacToe