import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Layout from './Component/Layout/Layout';
import PageNotFound from './Component/PageNotFound/PageNotFound';
import Shop from './Component/Shop/Shop';

function App() {
  const router = createBrowserRouter([
    {path: '/', element:  <Layout/>, children: [
      {path: '*', element: <PageNotFound/>},
      {path: '/', element: <Shop/>},
      {path: 'shop', element: <Shop/>},
    ]}
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <Header></Header>
      <Shop></Shop> */}
    </div>
  );
}

export default App;
