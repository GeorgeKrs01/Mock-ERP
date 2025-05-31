import "./App.css";
import NavBar from "./components/navbar";
import Card from "./components/Card";
import Container from "./components/container";

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

// Vertical
// return (
//     <>
//       <NavBar />
//       <div className="flex justify-center gap-6 mt-6 px-4">
//         <Container className="w-1/3">
//           <Card />
//           <Card />
//           <Card />
//         </Container>
//         <Container className="w-1/3">
//           <Card />
//           <Card />
//           <Card />
//         </Container>
//         <Container className="w-1/3">
//           <Card />
//           <Card />
//           <Card />
//         </Container>
//         <Container className="w-1/3">
//           <Card />
//           <Card />
//           <Card />
//         </Container>
//         <Container className="w-1/3">
//           <Card />
//           <Card />
//           <Card />
//         </Container>
//       </div>
//     </>
