import React from 'react'
import './css/index.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MENU from './components/MENU/MENU';
import HomeIcon from './components/HomeIcon';
import LobbyOptions from './components/Game/LobbyOptions/LobbyOptions';
import SelectCategories from './components/Game/SelectCategories/SelectCategories';

function App() {
    return (
        <div className="App">

            <Router>

                <Routes>

                    <Route path='/' element={<MENU />} />

                    <Route path='/solo'>

                        <Route path='' element={<LobbyOptions type='solo' />} />
                        <Route path='categories' element={<SelectCategories type='solo' />} />

                    </Route>

                </Routes>

                <HomeIcon />

            </Router>

        </div>
    )
}

export default App;
