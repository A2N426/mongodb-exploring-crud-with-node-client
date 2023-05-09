import { useLoaderData } from 'react-router-dom'
import './App.css'
import TeaCard from './components/TeaCard';
import { useState } from 'react';

function App() {

  const loadedTeas = useLoaderData();
  const [teas,setTeas]=useState(loadedTeas)


  return (
    <div className='lg:p-24 p-6'>
      <h2 className='text-3xl font-semibold'>Tea Stall Here</h2>
      <div className='md:grid grid-cols-2 gap-6'>
        {
          teas.map(tea=><TeaCard
            key={tea._id}
            tea={tea}
            teas={teas}
            setTeas={setTeas}
          ></TeaCard>)
        }
      </div>
    </div>
  )
}

export default App
