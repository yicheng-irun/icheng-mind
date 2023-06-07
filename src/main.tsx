import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { createRouter } from './create-router.tsx';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import { App } from './app.tsx';

const { router } = createRouter({
  pages: import.meta.glob('/src/pages/**/-page.tsx'),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App>
        <RouterProvider router={router} />
      </App>
    </HelmetProvider>
  </React.StrictMode>,
);
