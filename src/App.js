import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Component/Layout/Layout';
import Orders from './Component/Orders/Orders';
import PageNotFound from './Component/PageNotFound/PageNotFound';
import Shop from './Component/Shop/Shop';
import { productAndCartLoader } from './loaders/productAndCartLoader';

function App() {
  const router = createBrowserRouter([
    {path: '/', element:  <Layout/>, children: [
      {path: '*', element: <PageNotFound/>},
      {path: '/', element: <Shop/>},
      {path: '/shop', element: <Shop/>},
      {path: '/orders', element: <Orders/>, loader: productAndCartLoader}
    ]}
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
