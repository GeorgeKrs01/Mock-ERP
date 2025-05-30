import "./App.css";
import NavBar from "./components/navbar";
import Card from "./components/Card";
import Container from "./components/Container";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
      <Container>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
      <Container>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
    </>
  );
}

export default App;
