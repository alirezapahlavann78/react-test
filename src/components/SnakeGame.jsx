// components/SnakeGame.jsx
import { useEffect, useRef } from 'react'
import useSnakeGame from '../hooks/useSnakeGame'

const SnakeGame = () => {
  const { snake, food, score, gameOver, resetGame } = useSnakeGame()
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const cellSize = 20

    // Draw game
    ctx.fillStyle = '#2d3436'
    ctx.fillRect(0, 0, 400, 400)

    // Draw snake
    ctx.fillStyle = '#00b894'
    snake.forEach(({x, y}) => {
      ctx.fillRect(x * cellSize, y * cellSize, cellSize - 2, cellSize - 2)
    })

    // Draw food
    ctx.fillStyle = '#d63031'
    ctx.fillRect(food.x * cellSize, food.y * cellSize, cellSize - 2, cellSize - 2)

  }, [snake, food])

  return (
    <div className="p-4 text-center">
      <canvas 
        ref={canvasRef}
        width="400" 
        height="400"
        className="border-2 border-gray-300 mx-auto"
      />
      <div className="mt-4 text-lg font-bold">
        امتیاز: {score}
        {gameOver && <span className="text-red-600 ml-4">بازی تمام شد!</span>}
      </div>
      <button
        onClick={resetGame}
        className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        بازی مجدد
      </button>
    </div>
  )
}

export default SnakeGame