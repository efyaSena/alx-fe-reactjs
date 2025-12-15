import BlogPost from "./pages/BlogPost.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ...other routes */}
        <Route path="/blog/:id" element={<BlogPost />} />
        {/* ...catch-all route */}
      </Routes>
    </BrowserRouter>
  );
}
