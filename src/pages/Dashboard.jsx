// pages/Dashboard.jsx
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">بازی مار</h3>
        <Link 
          to="/snake"
          className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          شروع بازی
        </Link>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">بازی دوز</h3>
        <Link 
          to="/tictactoe"
          className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          شروع بازی
        </Link>
      </div>
    </div>
  )
}

export default Dashboard