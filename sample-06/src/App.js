import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

import Counter from "./components/Counter/Counter";
import Random from "./components/Random/Random";
import DayList from "./components/DayList/DayList";
import Stopwatch from "./components/Stopwatch/Stopwatch";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Nav/Footer";

const App = () => {
    const [componentList, setComponentList] = useState([]);
    const [selectedNav, setSelectedNav] = useState(0);

    useEffect(() => {
        const _list = [];
        const addComp = (name, component) => {
            _list.push({
                id: _list.length,
                name: name,
                component: component
            });
        }

        addComp('Counter', <Counter />);
        addComp('Random', <Random />);
        addComp('DayList', <DayList />);
        addComp('Stopwatch', <Stopwatch />);

        setComponentList(_list);
    }, []);

    const onNavClickHandler = e => {
        setSelectedNav(e.target.value);
    }

    return (
        <>
            <header className="_font _center">
                <h1>React Practice Components</h1>
            </header>

            <div className="_font main-app _card">
                <Nav
                    className="main-app__nav"
                    list={componentList}
                    onNavClick={onNavClickHandler}
                />

                {/*  <section className="_card">
                    {componentList[selectedNav] && componentList[selectedNav].component}
                </section> */}
                <Router>
                    <Footer />
                    <main>
                        <Routes>
                            <Route path="/" exact element={<Counter />} />
                            <Route path="/counter" element={<Random />} />
                            <Route path="/timer" element={<Stopwatch />} />
                        </Routes>
                    </main>
                </Router>
            </div>
        </>
    )
};

export default App;