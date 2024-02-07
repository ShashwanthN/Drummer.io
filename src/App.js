
import { useSelector } from "react-redux";

function App() {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div data-theme={theme} className='w-full min-h-[100vh]'>
      <div className="bg-ascent-1 w-full h-full">
hellol
      </div>
      
    </div>
  );
}

export default App;
