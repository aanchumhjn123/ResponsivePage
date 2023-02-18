import logo from './logo.svg';
import './App.css';
import 'remixicon/fonts/remixicon.css'
import { Container } from 'reactstrap';
import  logo1 from "../src/image/woman.png"


function App() {
  return (<>
    <header className= "header">
      <div className='arrow'><span><i class="ri-arrow-left-s-line"></i></span></div>
         <div className='head'>
          <h3 className='sma'>Trello app redesign</h3>
          <p>design team</p>
          </div>
          <div className='icon1'>
         <span><i class="ri-search-2-line"></i></span> 
         </div>
         <div className='icon2'>
         <span ><i class="ri-notification-line"></i></span>
        </div>
        <div  className='icon3'>
          <span><i class="ri-more-2-fill"></i></span></div>
    </header>


  <div className='contain'>
<div className=''>
  <span className='head1'>Need to do</span>
  <span className='arrow-down'><i class="ri-arrow-down-circle-line"></i></span>
  
  </div>
  <div class="card">
  <span></span>
  <div class="card-body">
    <div className='barcolor'>.</div>
  <h5 class="card-title">To do research</h5>
   <div>
   <span className='watch'><i class="ri-timer-2-line"></i></span>
   <span className='text'>16 sec</span>
   <span className='menu'><i class="ri-menu-4-fill"></i></span>
   <span className='picture'><img  src={logo1} className='img' alt='img'/> </span>
   </div>
  </div>
   </div>
     
   <div class="card">
  <span></span>
  <div class="card-body">
  <div className='barcolor1'>.</div>
  <h5 class="card-title">Create prototypes</h5>
   <div>
   <span className='watch'><i class="ri-timer-2-line"></i></span>
   <span className='text'>16 sec</span>
   <span className='menu'><i class="ri-menu-4-fill"></i></span>
   <span className='picture'><img  src={logo1} className='img' alt='img'/> </span>
   </div>
  </div>
   </div>
    
   <div class="card">
  <span></span>
  <div class="card-body">
  <div className='barcolor2'>.</div>
  <h5 class="card-title"> Create design concept</h5>
   <div>
   <span className='watch'><i class="ri-timer-2-line"></i></span>
   <span className='text'>16 sec</span>
   <span className='menu'><i class="ri-menu-4-fill"></i></span>
   <span className='picture'><img  src={logo1} className='img' alt='img'/> </span>
   </div>
  </div>
   </div>
   
   <div class="card">
  <span></span>
  <div class="card-body">
  <div className='barcolor3'>.</div>
  <h5 class="card-title"> Discuss concept with team</h5>
   <div>
   <span className='watch'><i class="ri-timer-2-line"></i></span>
   <span className='text'>16 sec</span>
   <span className='menu'><i class="ri-menu-4-fill"></i></span>
   <div>
   <span className='picture1'><img  src={logo1} className='img' alt='img'/> </span>
   <span className='picture2'><img  src={logo1} className='img' alt='img'/> </span>
   </div>
   
   </div>
  </div>
   </div>

   <div className='plusdiv' ><span className='plus'><i class="ri-add-line"></i></span></div>
   </div>
 </>
  );
}

export default App;
