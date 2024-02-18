import ContactPage from './components/footer';
import Form from './components/form';
import Hero from './components/hero';
import Mission from './components/mission';
import MissionFullScreen from './components/missionFullScreen';

function App() {
  return (
    <div>
      <Hero />
      <Mission />
      <MissionFullScreen />
      <Form />
      <ContactPage />
    </div>
  );
}

export default App;
