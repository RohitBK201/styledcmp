import logo from './logo.svg';
import './App.css';
import { Button } from './components/button';

function App() {
  return (
    <div className="App">
      <Button thm="pri">Primary Button</Button>
      <Button thm="def">Default Button</Button>
      <Button thm="dsh">Dashed Button</Button>
      <Button thm="txt">Text Button</Button>
      <Button thm="lnk">Link Button</Button>
    </div>
  );
}

export default App;
