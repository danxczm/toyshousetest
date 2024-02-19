import Background from './components/background';
import Footer from './components/footer';
import Form from './components/form';
import Hero from './components/hero';
import Interest from './components/interest';
import Mission from './components/mission';
import MissionFullScreen from './components/missionFullScreen';

function App() {
    return (
        <div>
            <Hero />
            <Background>
                <Mission />
                <MissionFullScreen />
                <Form />
            </Background>
            <Interest />
            <Footer />
        </div>
    );
}

export default App;
