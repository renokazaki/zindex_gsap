import CanvasContainer from "./Components/CanvasContaier";

function App() {
  return (
    <>
      <div className="h-screen w-full">
        <div className="fixed  w-full h-full bg-green-600">
          <CanvasContainer />
        </div>
      </div>
    </>
  );
}

export default App;
