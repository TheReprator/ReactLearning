import { HelloJSX } from './jsxVSjs/Hello';
import { HelloJS } from './jsxVSjs/Hello';
import { GreetFunctionProperties } from './functionProperties/PropertiesComponent';
import { GreetFunctionMultiProperties } from './functionProperties/PropertiesComponent';
import { GreetClassProperties } from './functionProperties/PropertiesComponent'
import { GreetClassMultiProperties } from './functionProperties/PropertiesComponent'
import FirstState from './state/FirstState';
import Counter from './state/SecondState';
import { DestrictingFirstFunction } from './destructing/Destructing';
import { DestrictingSecondFunction } from './destructing/Destructing';
import { DestructingClass } from './destructing/Destructing';
import { DestructingStateClass } from './destructing/Destructing';
import EventBindings from './eventBinding/EventBinding';
import MethodOneBinding from './eventBinding/MethodOneBinding';
import MethodTwoBinding from './eventBinding/MethodTwoBinding';
import MethodThreeBinding from './eventBinding/MethodThreeBinding';
import MethodFourBinding from './eventBinding/MethodFourBinding';


import './App.css';
import { ParentCommComponent } from './childCommunicationWithParent/1ParentChildMethodCommunication';
import { ParentMethodParamCommComponent } from './childCommunicationWithParent/2ParentChildMethodParamCommunication';
import ConditionalRendingComp from './conditionalRendring/ConditionRendringComponent';
import { PersonListRendering1 } from './rendering/FirstRendering';
import SecondRendering from './rendering/SecondRendering';
import CSSStyleSheet from './stylingReact/CSSStylingComponent';
import { CSSStyleSheetProps } from './stylingReact/CSSStylingComponent';
import InlineStyleComponent from './stylingReact/InLineStyleComponent';
import CSSModuleComponent from './stylingReact/CSSModuleComponent'

function App() {
  return (
    <div className="App">

    {/* 
      // CSS Rendering Example
    */}
    <CSSModuleComponent />
    <InlineStyleComponent />
    <CSSStyleSheet />
    <CSSStyleSheetProps name='true' />


    {/* List Rendering 
      <SecondRendering />
      <PersonListRendering1 /> 
    */}

  `{ /*
      <ConditionalRendingComp />
      */
   }

  { /* 
      //Child Communication to Parent
    
      <ParentCommComponent />
      <ParentMethodParamCommComponent />
        */
  }

{ /* 
      //Destructing Parameters
    <EventBindings />
    <h1> Different Binding Methods </h1>
    <MethodOneBinding />
    <MethodTwoBinding />
    <MethodThreeBinding />
    <MethodFourBinding />
    */
  }

    { /* 
      //Destructing Parameters
    <DestrictingFirstFunction name = "Tony" role='IronMan'/>
    <DestrictingSecondFunction name = "Steve Rogers" role='Captain America'/>
    <DestructingClass name = "Natasha" role='Black Widow'/>
    <DestructingStateClass />
  */
  }

    { /* 
      //StateExample 

      <FirstState />
      <Counter />
     */
    }

    { /*   
        //  JSx VS JS  
          <HelloJSX />
          <HelloJS />
       */
    }

    {
      /*Properties Explanation

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
      */
    }
    </div>
  );
}

export default App;
