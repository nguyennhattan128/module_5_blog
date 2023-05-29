import {Route, Routes} from "react-router-dom";
import Path from "./constant/Path"
import {Home} from "./pages/home/Home";
import {Register} from "./pages/users/Register";
import {Login} from "./pages/users/Login";
import 'antd/dist/reset.css';
import Error from "./components/Error";
import List from "./pages/posts/List";


function App() {
  return (
      <>
          <Routes>
              <Route path={Path.REGISTER} element={<Register/>}/>
              <Route path={Path.LOGIN} element={<Login/>}/>
              <Route path={Path.HOME} element={<Home/>}>
                  <Route path='' element={<List/>}/>
                  <Route path='error' element={<Error/>}/>
              </Route>
          </Routes>
      </>
  );

}

export default App;
