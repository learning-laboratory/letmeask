import { Home } from "./pages/Home";
import { CreateRoom } from "./pages/CreateRoom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Room } from "./pages/Room";

function App() {
  return (
    <BrowserRouter>
    <AuthContextProvider>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/rooms/create" exact component={CreateRoom} />
          <Route path="/rooms/:id" component={Room}/>
        </Switch>
        </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
