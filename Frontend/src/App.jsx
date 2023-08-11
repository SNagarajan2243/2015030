// import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Home from './Components/Home/Home'

// import Navbar from './Components/Navbar/Navbar'
import Trains from './Components/Trains/Trains'
// import Train from './Components/Train/Train'

const App = () => {

  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Trains />
  //   },
  //   {
  //     path: '/trainSchedule',
  //     elements: <Trains />
  //   },{
  //     path: '/trainSchedule/:trainId',
  //     elements: <Train />
  //   }
  // ])

  return (
    <>
      <Trains />
    </>
  )
}

export default App
