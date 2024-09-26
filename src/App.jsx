import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import authService from './appwrite/auth_service.js'
import { login, logout } from './redux/authSlice.js'
import { Footer, Header } from './components/index.js'
import { Outlet } from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const data = useSelector(p => p.auth)

  useEffect(() => {

    (async () => {
      try {
        const userData = await authService.getCurrentUser()
  
        userData ?  dispatch(login(userData)) : dispatch(logout())
        
      } catch (error) {
        dispatch(logout())
      } finally {
        setLoading(false)
      }
    })()
  }, [])


  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400 '>
      <div className="w-full block">
      <Header />
        <main>
 <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
