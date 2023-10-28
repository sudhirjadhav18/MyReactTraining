import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./component/Header";
import Section from "./component/Section";
import List from "./component/List";
import Form from "./component/Form";

import "./app.scss";

const App = () => {
  const [records, setRecords] = useState([]);

  const onSubmitHandler = (e) => {
    setRecords([...records, e]);
  }

  useEffect(() => {
    axios.get('/api/records').then(res => {
      setRecords(res.data);
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Section
          headingText="Add my record">
          <Form onSubmit={onSubmitHandler} />
        </Section>

        <Section
          className="collection"
          headingText="Collection">
          <List records={records} />
        </Section>
      </main>
    </>
  );
}

export default App;
