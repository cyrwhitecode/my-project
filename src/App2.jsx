import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainLayout }from './layouts/MainLayout.jsx';
import { Home } from "./Home/Home.jsx";
import { Login } from "./pages/Login.jsx";
import { Register } from "./pages/Register.jsx";
import Shop from "./Shop/Shop.jsx";
import { Categories } from "./Categories/Categories.jsx";
import { About } from "./About/About.jsx";
import { Protected } from "./protectedRoute/Protected.jsx";

function App () {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route 
                        path='/dashboard' 
                        element={
                            <Protected>
                                <Shop />
                            </Protected>
                        }
                    />
                    <Route path='/categories' element={<Categories />} />
                    <Route path='/about' element={<About />} />
                </Route>

            </Routes>
        </Router>
    )
}

export default App;