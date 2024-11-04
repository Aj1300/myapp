import logo from './logo.svg';
import './App.css';

function App() {
  const student=[{rollno:1,gender:'male'},
    {rollno:2,gender:'female'},
    {rollno:3,gender:'male'},
    {rollno:4,gender:'female'},
    {rollno:5,gender:'male'}];

  return (
    <div className='App'>
      <ol>
      {
        student.map((item,index)=><li key={index}>{item.age}</li>)
      }
      </ol>
    </div>
  );
}

export default App;
