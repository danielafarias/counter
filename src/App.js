import Counter from './components/Counter';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Counter />

      <section className='footer'>
        <a className='github' href='https://github.com/danielafarias/counter'>© danielafarias</a>
      </section>
    </div>
  );
}

export default App;
