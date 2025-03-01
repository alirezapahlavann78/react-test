// hooks/useSnakeGame.js
import { useState, useEffect } from 'react'

export default function useSnakeGame(){
  const [snake, setSnake] = useState([{ x: 10, y: 10 }])
  const [food, setFood] = useState({ x: 5, y: 5 })
  const [direction, setDirection] = useState({ dx: 1, dy: 0 })
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch(e.key) {
        case 'ArrowUp':
          if (direction.dy !== 1) setDirection({ dx: 0, dy: -1 })
          break
        case 'ArrowDown':
          if (direction.dy !== -1) setDirection({ dx: 0, dy: 1 })
          break
        case 'ArrowLeft':
          if (direction.dx !== 1) setDirection({ dx: -1, dy: 0 })
          break
        case 'ArrowRight':
          if (direction.dx !== -1) setDirection({ dx: 1, dy: 0 })
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [direction])

  useEffect(() => {
    if (gameOver) return

    const moveSnake = setInterval(() => {
      setSnake(prev => {
        const newSnake = [...prev]
        const head = { 
          x: newSnake[0].x + direction.dx,
          y: newSnake[0].y + direction.dy
        }

        // Check collision
        if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20 || 
            newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
          setGameOver(true)
          return prev
        }

        // Check food
        if (head.x === food.x && head.y === food.y) {
          setScore(s => s + 10)
          setFood({
            x: Math.floor(Math.random() * 20),
            y: Math.floor(Math.random() * 20)
          })
          return [head, ...newSnake]
        }

        return [head, ...newSnake.slice(0, -1)]
      })
    }, 150)

    return () => clearInterval(moveSnake)
  }, [direction, food, gameOver])

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }])
    setFood({ x: 5, y: 5 })
    setDirection({ dx: 1, dy: 0 })
    setScore(0)
    setGameOver(false)
  }

  return { snake, food, score, gameOver, resetGame }
}