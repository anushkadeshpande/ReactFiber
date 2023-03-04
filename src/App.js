import logo from './logo.svg';
import './App.css';
// import { Model } from './Nutella';
import { Model } from './Nutella.jsx';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <div className="App">
      <Canvas color='0xE6EF47' >
      
        <ambientLight />
        <pointLight position={[5,5 ,5 ]} intensity={1} />
        <pointLight position={[-3, -3, 2]} />
        <OrbitControls />
      <Model />
      </Canvas>
    </div>
  );
}

export default App;
