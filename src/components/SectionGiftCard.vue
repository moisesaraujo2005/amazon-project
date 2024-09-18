<template>
    <section class="sectionGift">
      <div class="bannerOrange">
        <div class="logoGift">
       
        <img src="../assets/setaAmazon.png" alt=""></div>
        <div class="textGift">
          <h1>Let them choose the perfect gift</h1>
          <h4>Shop now     ></h4>
        </div>
        <div class="giftsCards">
          <img class="giftCardOne" src="https://m.media-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png" alt="Gift Card One">
          <img class="giftCardTwo" src="https://m.media-amazon.com/images/G/01/gc/designs/livepreview/amazon_ltblue_noto_email_v2016_us-main._CB468761242_.png" alt="Gift Card Two">
        </div>
      </div>
    </section>
  </template>
  
  <style>
  .sectionGift {
    height: 45vh;
  }
  
  .bannerOrange {
    background-color: #FF9900;
    width: 90vw;
    margin-left: 5vw;
    height: 25vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .textGift{
    color: white;
    gap: 3vh;
    display: flex;
    flex-direction: column;
  }

  .logoGift{
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .logoGift img{
    width: 8vw;
  }

  .textGift h1{
    font-size: 2.5rem;
  }

  .textGift h4 {
    font-size: 1.1rem
  }
  .giftsCards img {
    width: 16vw;
    border-radius: 11px;
    height: 20vh;
  }
  
  .giftsCards {
    position: relative; 
    margin-right: 10vw;
    margin-bottom: 10vh;
  }
  
  .giftCardOne {
    width: 18vw; 
    position: relative;
    z-index: 2; 
    transform: rotate(-6deg);
    border: 11px;
  }
  
  .giftCardTwo {
    width: 18vw; 
    position: absolute;
    top: 13vh; 
    left: 20vh;
    transform: rotate(6deg);
    z-index: 1; 
  }

  @media screen and (max-width: 768px) {

    
    .bannerOrange{
      gap: 3vh;
      width: 100vw;
      margin-left: 0;
    }
    .sectionGift{
      height: 30vh;
    }

    .textGift h1{
      font-size: 0.9rem;
    }
    .textGift h4{
      font-size: 0.6rem
    }

   
    .giftsCards{
       margin-right: 0vw;
       margin-bottom: 0vh;
    }
    .giftsCards img{
      width: 33vw;
      height: 13vh;
    }

    .giftCardTwo{
      top: 0px;
      left:0px;
      position: relative;
    }

    .logoGift img{
      width: 20vw;
      margin-left: 1.5vh;
    }
  }
  </style>
  