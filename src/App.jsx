import { BrowserRouter } from 'react-router-dom';

import Footer from './components/footer';
import Form from './components/form';
import Hero from './components/hero';
import Interest from './components/interest';
import Mission from './components/mission';
// import MissionFullScreen from './components/missionFullScreen';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Hero />
                <Mission />
                {/* <MissionFullScreen /> */}
                <Form />
                <Interest />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
