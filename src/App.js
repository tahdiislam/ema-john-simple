import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Component/Layout/Layout';
import Login from './Component/Login/Login';
import Orders from './Component/Orders/Orders';
import PageNotFound from './Component/PageNotFound/PageNotFound';
import Register from './Component/Register/Register';
import Shop from './Component/Shop/Shop';
import { productAndCartLoader } from './loaders/productAndCartLoader';

function App() {
  const router = createBrowserRouter([
    {path: '/', element:  <Layout/>, children: [
      {path: '*', element: <PageNotFound/>},
      {path: '/', element: <Shop/>},
      {path: '/shop', element: <Shop/>},
      {path: '/orders', element: <Orders/>, loader: productAndCartLoader},
      {path: "/login", element: <Login/>},
      {path: "/register", element: <Register/>},
    ]}
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
