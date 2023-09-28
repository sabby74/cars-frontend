import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  
} from "react-router-dom";

import App from "./App";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Index from "./pages/Index";
import Show from "./pages/Show";
import { ServiceLoader ,SignUpLoader,UserLoader, } from "./loaders";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/signup" element={<SignUp />} loader={SignUpLoader} /> 
      <Route path="/login" element={<Login />} loader={UserLoader} />
      <Route path="" element={<Index />} loader={ServiceLoader} />
      <Route path=":id" element={<Show />} />
      <Route path="create" />
      <Route path="update/:id" />
      <Route path="delete/:id" />
     
    </Route>
  )
);

export default router;
