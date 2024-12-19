import { userState } from 'react';

import Header from './components/Header/Header.jsx';
import CoreConcepts from '../src/components/CoreConcept.jsx';
import {CORE_CONCEPTS} from './data.js';
import TabButton from './components/TabButton.jsx';

function App() {
  const [ selectedTopic, setSelectedTopic ] = userState('Please click a button');
  
  function handleSelect(selectedButton) {

    tabContent = selectedButton;
    console.log(tabContent);
  };

  console.log('APP COMPONENT EXECUTING');

  return (
    <div>
      <Header></Header>
      <main>

        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}></CoreConcepts>
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
