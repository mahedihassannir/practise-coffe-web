import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Authentication/AuthProvider/AuthProvider'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ReactGA from "react-ga4";
import router from './Routes/UserReturn'


const queryClient = new QueryClient();

ReactGA.initialize("G-36NYQKSLWL");

// Send pageview with a custom path
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>

      {/* this is for gap all right and left side gap */}
      {/* <div className='w-[100%] mx-auto'> */}

      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>


      {/* </div> */}

    </AuthProvider>

  </React.StrictMode>,
)