import CreateUserForm from "./components/CreateUserForm";
import Context from "./context";

function App() {
  return (
    <>
      <Context>
        <CreateUserForm />
      </Context>
    </>
  );
}

export default App;
