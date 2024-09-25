import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import authService from './appwrite/auth_service.js'
import { login, logout } from './redux/authSlice.js'
import { Footer, Header } from './components/index.js'


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
        <Header/>
        <main>
          <pre>

          {JSON.stringify(data, null ,2)}
          </pre>
          <button onClick={() => dispatch(login({name: "Akhtar"}))} >insertUser</button>
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
