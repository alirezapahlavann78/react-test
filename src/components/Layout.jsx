import react , {useState} from 'react'
import { Link, Outlet ,Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Layout = () => {
  const { user, logout } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (!user) return <Navigate to="/login" />

  return (
    <div className="min-h-screen bg-gray-100">
      {/* سایدبار */}
      <div className={`fixed inset-y-0 right-0 z-50 w-64 bg-secondary transform transition-transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 text-white">
          <h2 className="text-xl font-bold mb-4">منو</h2>
          <nav className="space-y-2">
            <Link to="/" className="block p-2 hover:bg-primary rounded">داشبورد</Link>
            <Link to="/about" className="block p-2 hover:bg-primary rounded">درباره ما</Link>
            <Link to="/contact" className="block p-2 hover:bg-primary rounded">تماس با ما</Link>
            <button onClick={logout} className="w-full text-left p-2 bg-danger hover:bg-red-700 rounded">خروج</button>
          </nav>
        </div>
      </div>

      {/* محتوای اصلی */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'mr-64' : 'mr-0'}`}>
        <header className="bg-primary text-white p-4 flex justify-between items-center">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-2xl">☰</button>
          <h1 className="text-xl font-bold">بازی های من</h1>
          <span>خوش آمدید {user.username}</span>
        </header>
        
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout