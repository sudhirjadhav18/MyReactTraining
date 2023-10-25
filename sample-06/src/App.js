import React from "react";

import './App.css';

import Counter from "./Counter/Counter";
import Random from "./Random/Random";
import DayList from "./DayList/DayList";
import Stopwatch from "./Stopwatch/Stopwatch";

const App = () => (
    <>
        <header className="_font _center">
            <h1>React Practice Components</h1>
        </header>
        <main className="_font">
            <nav>

            </nav>
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