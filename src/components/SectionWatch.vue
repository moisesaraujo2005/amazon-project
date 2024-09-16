<template>
    <section class="watchSection">
      <div class="appleWatchs">
        
        <div class="watchInfo">
            <div class="logo">
            <img class="logoApple" src="../assets/logoApple.png" alt="">
            </div>
            <h1>Heavy on features <br>
            Light on price</h1>
            
            <h3>From $299</h3>
            <div class="buttonLearn">
          <button class="buttonBuy">Buy</button>
          <p>Learn More  ></p></div>
        </div>
  
        <div class="divWatchs">
            <img class="relogiosWatch" src="../assets/relogiosWatch.png" alt="">
        </div>
     </div>
  
      <div class="acessoriesSession">
        <div class="textAcessories">
        <h1>Discover all the acessories</h1>
        <p>Learn More ></p></div>
        <div class="imagensDiscover">
        <img src="../assets/iphone.png" alt="">
        <img src="../assets/airpods.png" alt="">
        <img src="../assets/appleWatchBlack.png" alt=""></div>
      </div>
    </section>
  </template>
  
  <style>
  .watchSection {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    gap: 5vh;
  }
  
  .appleWatchs {
    background-color: #EEF3F9;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row; 
    height: 70vh;
    width: 59vw;
  
  }
  
  .watchInfo {
    display: flex;
    flex-direction: column;
    height: 60vh;
    align-items: center;
    gap: 5vh; 
    margin-left: 5vh;
  }
  
  .divWatchs {
    display: flex;
    justify-content: flex-end; 
    align-items: center;
    overflow:hidden
  }
  
  .relogiosWatch {
    width: 32vw;
    height: 75vh;
    margin-left: 5vh;
  }
  
  .acessoriesSession {
    text-align: center;
    background-color: #EEF3F9;
    width: 30vw;
    height: 70vh;
  }

  .buttonLearn {
    display: flex;
    gap: 3vh;
    align-items: center;
  }

  .logoApple 
  {
    width: 10vw;
  }

  .logo {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .watchInfo h1 {
    font-size: 2.4rem
  }
  

  .watchInfo h3 {
    font-size: 2rem;
  }

  .buttonBuy{
    height: 6vh;
    width: 10vw;
    background-color: #FF9900;
    color: white;
    font-size: 1.2rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
  .buttonLearn p {
    font-size: 1.2rem;
    color: #FF9900;
    cursor: pointer;
  }

 .acessoriesSession{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 25vw;
  
 }

.imagensDiscover img {
  width: 12vw;
  object-fit: cover;
  height: 22vh;
}

.textAcessories{
  display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 3vh;
    gap: 2vh;
    margin-left: 4vh;
  
}

.textAcessories h1 {
  font-size: 2.2rem;
  text-align: start;
 
}

.textAcessories p {
  color: #FF9900;
  cursor: pointer;
  font-size: 1.2rem;
}
  </style>
  