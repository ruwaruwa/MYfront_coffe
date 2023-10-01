import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import {createTheme} from '@emotion/styled'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  
  palette: {
    primary: {
      main:'#424141  ',    
      dark:'#a31545',
      light:"#ed4b82",
      ruwa:"#D16902",
      madow:" #0A0909"
    },    
    error:{
      main:"#E50F0C",
      warning:"#E75E06",
      dark:'#145A32',
    }
  },
});

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom';
const queryClient = new QueryClient()
//const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
       <BrowserRouter>

    <App />

    </BrowserRouter> 
    </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
