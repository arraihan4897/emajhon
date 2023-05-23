import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/Layout/Main';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Order from './components/Orders/Order';
import Inventory from './components/Inventory/Inventory';
import { productStoreCardLoader } from './Loaders/Prooducts and card loader';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Main></Main>,
      children:[
              {
                path:'/',
                loader:()=>fetch('products.json'),
                element:<Shop></Shop>
               },{
                path:'/about',
                element:<About></About>
               },
               {
                path:'/orders',
                loader:productStoreCardLoader,            
                element:<Order></Order>
               },
               {
                path:'/Inventory',
                element:<Inventory></Inventory>
               },]
              }

  ])
  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
 
    </div>
  );
}

export default App;
