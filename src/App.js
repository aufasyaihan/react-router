import {
  // Route,
  RouterProvider,
  createBrowserRouter,
  // createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import Root from "./pages/RootLayout";
import ErrorPage from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

// const routerDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

// const router = createBrowserRouter(routerDefinition);

const router = createBrowserRouter([
  {
    path: "/", // this is an absolute path
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },// relative path = "", absolute path = "/" (starts with "/")
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetail /> },
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
