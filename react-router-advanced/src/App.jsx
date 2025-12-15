import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Profile from "./components/Profile.jsx";


<Route element={<ProtectedRoute />}>
  <Route path="/profile" element={<Profile />} />
</Route>
