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
import { ServiceLoader ,ShowLoader,SignUpLoader,UserLoader, } from "./loaders";
import { createAction, deleteAction, signUpAction, updateAction } from "./actions";
import Update from "./pages/Update";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Login />} loader={UserLoader} />
      <Route path="/signup" element={<SignUp />} loader={SignUpLoader} action={signUpAction} /> 
      <Route path="" element={<Index />} loader={ServiceLoader} />
      <Route path=":id" element={<Show />} loader={ShowLoader}/>
      <Route path=":id/edit" element={<Update />} loader={ShowLoader}/>
      <Route path="create" action={createAction}/>
      <Route path="update/:id" action={updateAction} />
      <Route path="delete/:id" action={deleteAction}/>
     
    </Route>
  )
);

export default router;
