import Calendary from './components/Calendary';
import { useSelector } from 'react-redux';

import GlobalStyles from './GlobalStyles.css';

const App = () => {
  const selector = useSelector(store => store.settings)

  return (
    <GlobalStyles darkMode={selector.darkMode}>
      <Calendary />
    </GlobalStyles>
  );
}

export default App;
