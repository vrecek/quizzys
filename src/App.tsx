import React from 'react'
import './css/index.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MENU from './components/MENU/MENU';
import HomeIcon from './components/HomeIcon';
import SelectCategoriesSolo from './components/Game/SelectCategories/Solo/SelectCategoriesSolo';
import GameSolo from './components/Game/GamePage/Solo/GameSolo';
import LobbyOptionsSolo from './components/Game/LobbyOptions/Solo/LobbyOptionsSolo';
import Summary from './components/Game/Summary/Summary';
import CONTACT from './components/CONTACT/CONTACT';

function App() {
    return (
        <div className="App">

            <Router>

                <Routes>

                    <Route path='/' element={<MENU />} />

                    <Route path='/solo'>

                        <Route path='' element={<LobbyOptionsSolo />} />
                        <Route path='categories' element={<SelectCategoriesSolo />} />
                        <Route path='game' element={<GameSolo />} />

                    </Route>

                    <Route path='/summary' element={<Summary />} />

                    <Route path='/contact' element={<CONTACT />} />

                </Routes>

                <HomeIcon />

            </Router>

        </div>
    )
}

export default App;
