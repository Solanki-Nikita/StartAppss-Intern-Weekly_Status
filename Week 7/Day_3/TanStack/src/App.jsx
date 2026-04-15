import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from "./components/Layout/MainLayout";
import { Home } from "./Pages/Home";
import { FetchOld } from "./Pages/FetchOld";
import { FetchRQ } from "./Pages/FetchRQ";  


const router = createBrowserRouter([
  {
    path : "/",
    elemeny:<MainLayout/>,
    childer:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/trad",
        element:<FetchOld/>,
      },
      {
        path:"/rq",
        element:<FetchRQ/>,
      },
    ],
  },
]) 


const App = () => {
  return (
    <div>TanStack Query</div>
  )
}

export default App