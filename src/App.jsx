import { BrowserRouter } from 'react-router-dom';

import Footer from './components/footer';
import Form from './components/form';
import Hero from './components/hero';
import Interest from './components/interest';
import Mission from './components/mission';

function App() {
    return (
        <BrowserRouter>
            <Hero />
            <Mission />
            <Form />
            <Interest />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
