import {Navigate, Route, Routes} from "react-router-dom";
import Path from "./constant/Path"
import {Home} from "./pages/home/Home";
import {Register} from "./pages/users/Register";
import {Login} from "./pages/users/Login";
import 'antd/dist/reset.css';
import Error from "./components/Error";
import List from "./pages/posts/List";
import {useSelector} from "react-redux";
import Test from "./pages/posts/Test";
import {Edit} from "./pages/home/post/EditPost";


function App() {
    const user = useSelector(({users})=>{
        return users.currentUser

    })


    return (
        <>
            <Routes>
                <Route path={Path.REGISTER} element={<Register/>}/>
                <Route path={Path.LOGIN} element={<Login/>}/>
                <Route path={"/test"} element={<Test/>}/>
                {user ?
                    <>
                        <Route path={Path.HOME} element={<Home/>}>
                            <Route path='' element={<List/>}/>
                            <Route path='edit/:id' element={<Edit/>}/>
                            <Route path='error' element={<Error/>}/>
                        </Route>
                    </>
                    :
                    <>
                        <Route path={"*"} element={<Navigate to={'login'}/>}/>
                    </>
                }
            </Routes>
        </>
    );

}

export default App;
