import { Home } from "./pages/Home";
import { CreateRoom } from "./pages/CreateRoom";
import { BrowserRouter, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
    <AuthContextProvider>
        <Route path="/" exact={true} component={Home} />
        <Route path="/rooms/create" component={CreateRoom} />
        </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
