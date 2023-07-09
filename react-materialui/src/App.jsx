import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Create from "./Components/Pages/Create/Create";
import Root from "./Components/Root";
// import Setting from "./Components/Pages/Setting/Setting";
// import Profile from "./Components/Pages/Profile/Profile";
import NotFound from "./Components/Pages/NotFound/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
      {/* <Route path="profile" element={<Profile />} />
      <Route path="setting" element={<Setting />} /> */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);


const App = () => {
  return (
      <RouterProvider router={router} />
  );
};

export default App;
