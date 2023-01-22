import './App.css';
import { Form } from './components/Pad';
import { Table } from './components/Table';
import { RequestProvider } from './contexts/Request'

export interface Props {
  onSubmit: (data: Record<string, any>) => void;
}

function App() {


  return (
    <div className="App">
      <RequestProvider>
        <Form/>
        <Table/>
      </RequestProvider>
    </div>
  );
}

export default App;
