import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/pure/greeting";
import GreetingF from "./components/pure/greetingF";
import Taskspage from "./pages/tasks/TasksPage";
import ContactListComponent from "./components/container/contact_list";
import Ejemplo1 from "./hooks/Ejemplo1";
import Ejemplo2 from "./hooks/Ejemplo2";
import MiComponenteConContexto from "./hooks/Ejemplo3";
import Ejemplo4 from "./hooks/Ejemplo4";
import Greetingstyled from "./components/pure/greetingStyled";
import ClocksFC from "./components/pure/clocksFC";
import Clock from "./components/pure/clocks";
import Father from "./components/container/father"
import OptionalRender from "./components/pure/optionalRender";
import Square from "./components/pure/square";
import LoginPage from "./components/pure/forms/loginFormik";
import RegisterPage from "./components/pure/forms/RegisterFormik";
import AsyncExample from "./components/pure/AsyncExample";
import ObservableExample from "./components/pure/ObservableExample";
import FetchExample from "./components/pure/FetchExample";
import AxiosExample from "./components/pure/AxiosExample";

function App() {
  
  return (
    <div className="App">
        {/*Componente clase greetings.jsx*/}
        {/* <Greeting name="Blas" /> */}
        {/* Componente funcional greetingsF.jsx */}
        {/* <GreetingF name= "Blas" age={22+1}></GreetingF> */}
        {/* Componente lista que renderiza un elemento que utiliza clases y variables auxiliares */}
        {/* <Taskspage /> */}
        {/* <ContactListComponent /> */}
        {/* <Ejemplo1 /> */}
        {/* <Ejemplo2 /> */}
        {/* <MiComponenteConContexto /> */}
        {/* <Ejemplo4 nombre= "Blas"> */}
        {/* Todo lo que hay aquí dentro es tratado como props.children */}
{/*           <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
        {/* <Greetingstyled name="Martín" /> */}
        {/* <ClocksFC /> */}
        {/* <Clock /> */}
        {/* <Father /> */}

        {/* Ejemplos de renderizado condicional */}
        {/* <OptionalRender /> */}
        {/* <Square /> */}

        {/* Ejemplos de uso de Formik y Yup */}
        {/* <LoginPage /> */}
        {/* <RegisterPage /> */}

        {/* Ejemplos de procesos asíncronos */}
        {/* <AsyncExample /> */}
        {/* <ObservableExample /> */}
        {/* <FetchExample /> */}
        <AxiosExample />
    </div>
  );
}

export default App;
