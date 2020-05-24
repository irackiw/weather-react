import React from "react";
import { Container } from "react-bootstrap";
import Weather from "./components/Weather/Weather";
import Location from "./components/Location";
import LimitEntities from "./components/LimitEntities";
import "./styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <Container>
      <Location />
      <LimitEntities />
      <Weather />
    </Container >
  );
}

export default App;
