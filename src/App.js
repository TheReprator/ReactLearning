import { HelloJSX } from './jsxVSjs/Hello';
import { HelloJS } from './jsxVSjs/Hello';
import { GreetFunctionProperties } from './functionProperties/PropertiesComponent';
import { GreetFunctionMultiProperties } from './functionProperties/PropertiesComponent';
import { GreetClassProperties } from './functionProperties/PropertiesComponent'
import { GreetClassMultiProperties } from './functionProperties/PropertiesComponent'

import './App.css';

function App() {
  return (
    <div className="App">
    {/*   
        //  JSx VS JS  
          <HelloJSX />
          <HelloJS />
       */
      }

      {/*Properties Explanation*/}

      <h1>Functional Properties Compnent</h1>
      <GreetFunctionProperties name = "Bruce" role='Batman'/>
      <GreetFunctionProperties name = "Clarke" role='Superman'/>
     
      <GreetFunctionMultiProperties name = "Diana" role='WonderWoman'>
        <p>This is Children props</p>
      </GreetFunctionMultiProperties>
      <GreetFunctionMultiProperties name = "adam" role='Black Adam'/>

      <h1>Class Properties Compnent</h1>
      <GreetClassProperties name = "Peter" role='Spiderman'/>
      <GreetClassProperties name = "Tony" role='IronMan'/>

      <GreetClassMultiProperties name = "Tchalla" role='Black Panther'>
        <button>Upload</button>
      </GreetClassMultiProperties>

      <GreetClassMultiProperties name = "Bruce" role='Hulk'/>
    </div>
  );
}

export default App;
