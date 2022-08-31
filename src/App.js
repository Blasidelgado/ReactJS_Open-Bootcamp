import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/pure/greeting";
import GreetingF from "./components/pure/greetingF";
import TaskListComponent from "./components/container/task.list";
import { ContactListComponent } from "./components/container/contact_list";

function App() {
  
  return (
    <div className="App">
        {/*Componente clase greetings.jsx*/}
        {/* <Greeting name="Blas" /> */}
        {/* Componente funcional greetingsF.jsx */}
        {/* <GreetingF name= "Blas" age={22+1}></GreetingF> */}
        {/* Componente lista que renderiza un elemento que utiliza clases y variables auxiliares */}
        {/* <TaskListComponent/> */}
        <ContactListComponent />
    </div>
  );
}

export default App;
