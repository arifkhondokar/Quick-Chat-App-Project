import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Error from "./pages/error/Error";
import Home from "./pages/home/Home";
import Messages from './pages/messages/Messages';
import Notification from './pages/notification/Notification';
import Settings from './pages/settings/Settings';
import RootLayout from "./components/layout/RootLayout";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>

        <Route path="/" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>

        <Route element={<RootLayout/>}>
          <Route path="/home" element={<Home/>}/>
          <Route path="/messages" element={<Messages/>}/>
          <Route path="/notification" element={<Notification/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Route>

        <Route path="*" element={<Error/>}/>

      </>
    )
  );


  return (
    <>
      
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
