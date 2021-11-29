// import { Components } from 'antd/lib/date-picker/generatePicker';
import './App.css';
import Demo, {Login }from './components/Login';
import HorizontalLoginForm from './components/Signup'
// import Routes from './routes/Routing';
function App() {
  return (
      <div className="App">
      {/* <Routes /> */}
        <Demo />
        <HorizontalLoginForm /> 

     </div>
  );
}

export default App;
