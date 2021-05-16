import logo from './logo.svg';
import {LandingPage} from './components';
import {Helmet} from 'react-helmet';
import './App.css';

const title = "Algoblock: Algorithmic trading made easy";
const description = "Algoblock is the easy way to automate your trading and make your investing smarter. Build your own trading strategy today!"

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
      </Helmet>
      <LandingPage/>
    </div>
  );
}

export default App;
