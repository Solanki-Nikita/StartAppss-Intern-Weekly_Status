import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider, ReactQueryDevtools } from '@tanstack/react-query';



import './index.css'
import App from './App.jsx'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {            
      staleTime: 1000 * 60 * 5, // 5 min 
      retry: 2,      // retry failed request twice
      refetchOnWindowFocus: false,    //don't refetch on tab switch
    },
  },
});

createRoot(document.getElementById('root')).render(
<QueryClientProvider client={queryClient}>
  <App />
  <ReactQueryDevtools  initialIsOpen={false}/>
</QueryClientProvider>
 
);
