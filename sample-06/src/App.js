import React from "react";

import './App.css';

import Counter from "./Counter/Counter";
import Random from "./Random/Random";
import DayList from "./components/DayList/DayList";
import Stopwatch from "./components/Stopwatch/Stopwatch";
import Nav from "./components/Nav/Nav";

const App = () => (
    <>
        <header className="_font _center">
            <h1>React Practice Components</h1>
        </header>
        <main className="_font main-app _card">
            <Nav />
            <section>
                <Counter />
                <Random />
                <DayList />
                <Stopwatch />
            </section>
        </main>
    </>
);

export default App;