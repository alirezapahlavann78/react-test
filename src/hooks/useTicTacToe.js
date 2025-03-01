// hooks/useTicTacToe.js
import { useState } from 'react'

export default function useTicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)
  const [winner, setWinner] = useState(null)

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ]

    for (let line of lines) {
      const [a, b, c] = line
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  const handleClick = (i) => {
    if (winner || board[i]) return

    const newBoard = board.slice()
    newBoard[i] = isXNext ? 'X' : 'O'
    setBoard(newBoard)
    setIsXNext(!isXNext)
    setWinner(calculateWinner(newBoard))
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
    setWinner(null)
  }

  const status = winner 
    ? `برنده: ${winner}`
    : board.every(Boolean) 
    ? 'مساوی!' 
    : `نوبت: ${isXNext ? 'X' : 'O'}`

  return { board, status, handleClick, resetGame }
}