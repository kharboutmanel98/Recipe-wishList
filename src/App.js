import HomePage from "./components/HomePage";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  
  const router = createBrowserRouter([
  
    {path: '/', element: <HomePage/>,},
    {path: '/content', element: <Content/>},
    {path: '/header', element: <Header/>},
    {path: '/footer', element: <Footer/>},
    {path: '/login', element: <LoginPage/>},
    {path: '/login', element: <wishlist/>},
   
  
  ]);

  return (
<RouterProvider router={router}/>
  );
}
export default App;
