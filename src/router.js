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
import { ServiceLoader ,showLoader,SignUpLoader,UserLoader, } from "./loaders";
import { createAction, deleteAction, updateAction } from "./actions";
import Update from "./pages/Update";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/signup" element={<SignUp />} loader={SignUpLoader} /> 
      <Route path="/login" element={<Login />} loader={UserLoader} />
      <Route path="" element={<Index />} loader={ServiceLoader} />
      <Route path=":id" element={<Show />} loader={showLoader}/>
      <Route path=":id/edit" element={<Update />} loader={showLoader}/>
      <Route path="create" action={createAction}/>
      <Route path="update/:id" action={updateAction} />
      <Route path="delete/:id" action={deleteAction}/>
     
    </Route>
  )
);

export default router;
