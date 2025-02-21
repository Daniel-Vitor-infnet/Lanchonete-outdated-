import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";

import Home from "../views/Home";
import Settings from "../views/Settings";
import SignUp from "../views/Signup";
import SignIn from "../views/Signin";
import Dashboard from "../views/Dashboard";
import Form from "../views/Form";
import Protected from "./protected";
import { handleVerificationProtected, isAuthenticated } from "../services/authentication";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Protected />}>
        <Route path="settings" element={<Settings />} loader={handleVerificationProtected} />
        <Route path="dashboard" element={<Dashboard />} loader={handleVerificationProtected} />
        <Route path="new/:type" element={<Form />} loader={handleVerificationProtected} />
        <Route path=":type/:id" element={<Form />} loader={handleVerificationProtected} />
        <Route path="/" element={<Home />} loader={handleVerificationProtected} />
      </Route>
      <Route path="signin" element={<SignIn />} loader={isAuthenticated} />
      <Route path="signup" element={<SignUp />} loader={isAuthenticated} />
    </>
  )
);

const Index = () => {
  return <RouterProvider router={router} />;
};

export default Index;
