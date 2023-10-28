import { useState } from "react";

import Header from "./component/Header";
import Section from "./component/Section";
import List from "./component/List";
import Form from "./component/Form";

import "./app.scss";

const recordsData = [
  {
    album: "Rock",
    artist: "John Smith",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    album: "Lorem Ipsum",
    artist: "Eminem",
    description: "It has roots in a piece of classical Latin literature looking at its layout."
  }
];

const App = () => {
  const [records, setRecords] = useState(recordsData);

  const onSubmitHandler = (e) => {
    console.log(e);
    records.push(e);
    setRecords([...records]);
  }

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
