// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `
<div class="card-header">

    <div class="left-side">Account</div>
    <div class="right-side">
        <span>^</span> <span>Available Cash</span> </br>Todays's Change
    </div>  
    <div class="clear"></div> 

  </div>

  <div class="card-content">
   
    <div class="card-line">
      <div class="left-side">ira - 5200</div>
      <div class="right-side">
          <div class="cash-amount">$538.00</div>
          <div class="cash-changes red">-0.008% / $98797.00</div>
      </div>
      <div class="clear"></div>
    </div>   

    <div class="card-line">
      <div class="left-side">ira - 8300</div>
      <div class="right-side">
          <div class="cash-amount">$3992.00</div>
          <div class="cash-changes green">+0.008% / $98797.00</div>
      </div>
      <div class="clear"></div>
    </div>   

    <div class="clear"></div>  

    <div class="load-more">
      <a href="">Load more</a>
    </div>



  </div>






`;