
import Cuadro1, {Cuadro2} from "./components/Cuadro1";
import Saludo, {Bye} from "./components/Saludo";

let nombre = 
{
  name: "alan isidro"
}

function App() {
  return (
            <>
              <Saludo naming={nombre}/>
            </>
  );
}

export default App;

//jsx combinacion entre html y js
