import { 
  ClerkProvider, 
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  RedirectToSignIn 
} from "@clerk/clerk-react";
import Home from "./components/pages/home";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Initial from "./components/pages/initial";
import Wrapper from "./components/wrapper";
import Footer from "./components/footer";

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
      appearance={
        { variables: 
          {
            spacingUnit: "0.85rem",
          }
        }
      }
    >
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route
          path="/sign-in/*"
          element={
            <Wrapper css={"h-screen"}>
              <SignIn routing="path" path="/sign-in" />
              <div className="absolute bottom-0">
                <Footer/>
              </div>
            </Wrapper>
          }
        />
        <Route
          path="/sign-up/*"
          element={
            <Wrapper css={"sm:h-screen"}>
              <SignUp routing="path" path="/sign-up" />
              <div className="absolute bottom-0">
                <Footer/>
              </div>
            </Wrapper>
          }
        />
        <Route
          path="/home"
          element={
          <>
            <SignedIn>
              <Home />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  )
}

export default App
