import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@millenniumdb/graph-explorer/styles.css'
import './index.css'
import Routing from './Routing'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider>
      <Routing/>
    </MantineProvider>
  </StrictMode>,
)
