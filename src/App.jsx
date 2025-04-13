// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import SpeedTyping from './components/speedTyping.jsx';
// import Pop from './components/pop.jsx';
// import { Timeprovider } from './context/timeContext.js';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <Timeprovider>
//       <div>
//         <SpeedTyping />
//       </div>
//     </Timeprovider>

//     <div>

//     </div>
//     </>
//   )
// }

// export default App

/*import './App.css';
import speedTyping from './components/speedTyping';

function App() {
  return (
    <div className="App">
      <speedTyping />
    </div>
  );
}

export default App;*/

import { useState } from 'react';
import './App.css';
import SpeedTyping from './components/speedTyping.jsx';
import Pop from './components/pop.jsx';
import { Timeprovider } from './context/timeContext.js';
import Faq from './components/faq.jsx'; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Timeprovider>
        <div>
          <SpeedTyping />
        </div>
      </Timeprovider>

      <div>
        <Faq /> {/* 👈 Dropping in the FAQ here */}
      </div>
    </>
  );
}

export default App;
