<template>
<section class="cardsPromotion">
<div class="cards">

<div class="card">
    
<h3>
    Camera & Photo up to <p style="font-weight: bold;">-20%</p>
</h3>  <div class="cardText">
<h5>View All</h5>
<img src="https://www.sony.com/image/fa5e09f443737954476853d67fb65a13?fmt=png-alpha&wid=660&hei=660" alt=""></div>

</div>
<div class="card">
<h3>
    Video games up to  <p style="font-weight: bold;">-10%</p>
</h3><div class="cardText">
<h5>View All</h5>
<img src="https://www.dashcontroles.com.br/wp-content/uploads/2020/12/Zombies.png" alt=""></div>

</div>
<div class="card">
<h3>
    Books up to <p style="font-weight: bold;">-15%</p>
</h3><div class="cardText">
<h5>View All</h5>
<img src="https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F02%2F12%2F00%2F05%2F05%2F910db405-6bd4-4a5d-bce7-c2e3135dc5e6%2F449070_WAntoneta_55908c_killing.png?auto=format&ch=Width%2CDPR&crop=false&fm=png&q=25&w=1200&h=1200" alt=""></div>

</div>

</div></section>



</template>

<style scoped>


.cardsPromotion{
    width: 99vw;
    height: 50vh;
}
.cards{
 
    align-items: center;
    display: flex;
    gap: 1.5vh;
    justify-content: center;
    overflow-x: hidden;
}

.card{
    background-color: #EEF3F9;
    height: 45vh;
    width: 25vw;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap:3vh
    
}
.card h5{
    color: #FF9000;
    margin-top: 2vh;
    font-size: 1.3rem;
    text-align: center;
    margin-top: 3vh;
    
}

.card img{
    width: 12vw;
    ;
   
}

.cardText{
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    gap: 8vh;
    margin-left: 3vh;
}

.card h3{
    font-size: 2.5rem;
    margin-left: 2vh;
    margin-top: 5vh;
    font-weight: 100
 
}

@media screen and (max-width: 768px) {
  .cards {
    display: flex;
 
    gap: 1vh; 
    justify-content: center;
    flex-direction: column;
  }

  .card {
    width: 65vw; 
    height: auto;
  }

  .card h3 {
    font-size: 1.3rem;
  }

  .card h5 {
    font-size: 0.8rem;
  }

  .card img {
    width: 30vw;
  }

  .cardsPromotion{
    height: 135vh;
  }
}

</style>