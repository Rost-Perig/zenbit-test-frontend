import './App.css';
import Section from 'components/Section';
import InputsForm from 'components/InputsForm';
import Footer from 'components/Footer/Footer';
import Modal from 'components/Modal';


function App() {
  return (
    <div className="App">
      <Section>
        <InputsForm />
      </Section>
      <Footer />
      <Modal />
    </div>
  )
};

export default App;
