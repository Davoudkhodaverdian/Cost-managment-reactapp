import logo from './../../logo.svg';
import './home.css';
import CostManagment from '../CostManagment';

export default function Home() {
  return (
    <div>
      <header dir='rtl'>
        <div className='flex bg-slate-50 shadow justify-between'>
          <div className='p-1 mx-3'>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className='p-1 pl-3'></div>
        </div>
      </header>
      <div className=''>
        <CostManagment />
      </div>
    </div>
  );
}

