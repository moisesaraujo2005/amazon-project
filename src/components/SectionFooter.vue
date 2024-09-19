<template>

<footer>

<div class="box-footer">
    <div class="LogoAmazon">
        <img src="../assets/logoAmazon.png" alt="">
    </div>
    <div class="box-special">
        <h3>Get to Know Us</h3>
        <p>Carrers</p>
        <p>About Us</p>
        <p>UK Modern Slavery Statement</p>

        <img src="../assets/appleEgoogl.png" alt="">
        
    </div>

    <div class="box-special">
        <h3>Make Money with Us</h3>
        <p>Make Money with Us</p>
        <p>Sell on Amazon</p>
        <p>Sell Under Private Brands</p>
        <p>Sell on Amazon Business</p>
        <p>Sell on Amazon Handmade</p>
        <p>Fullfilment by Amazon</p>
        <p>Seller Fulfilled Prime</p>
        <p>Adversite Your Products</p>
        <p>Amazon Pay</p>
        <p>Host an Amazon Hub</p>
    </div>

    <div class="box">
        <H3>Amazon Payment Methods</H3>
        <p>Amazon Platinum Mastercard</p>
        <p>Amazon Classic Mastercard</p>
        <p>Amazon Money Store</p>
        <p>Gift Cards</p>
        <p>Amazon Currency Converter</p>
        <p>Payment Methods Help</p>
        <p>Shop with Points</p>
        <p>Top Up Your Account</p>
        <p>Top Up Your Account in Store</p>

    </div>

<div class="box">

<h3>Let us Help You</h3>
<p>Track Packages or View Orders</p>
<p>Delivery Rates & Polices</p>
<p>Amazon Prime</p>
<p>Return & Replacements</p>
<p>Recycling</p>
<p>Manage Your Content and Devices</p>
<p>Amazon Mobile App</p>
<p>Amazon Assistant</p>
<p>Customer Service </p>

</div>



</div>
<div class="line">

</div>
<div class="boxTextFooter">
    <div class="text">
    <h4>Amazon.com 2024</h4>
    <p>Conditions of Use & Sale</p>
    <p>Privaty Notice</p>
    <p>Cookies Notice </p></div>

    <div class="languageCountry">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqU0XAXRHVZ38JL2bXZFfyl3dbbhXfIFaong&s" alt="">
        <p>United Kingdom</p>
        <img src="../assets/seta-para-baixo.png" alt="">
    </div>
</div>
</footer>


</template>


<style>


footer{
    background-color:#141B24 ;
    height: 45vh;
}

.box-special{
    display: flex;
    flex-direction: column;
    gap: 0.9vh;
    align-items: center;
    margin-top: 3vh;
    color: rgb(133, 131, 131);
}
.box-footer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 10vh;


}

.LogoAmazon{

    position: relative;
    left: 15vh;
    bottom: 7vh;
}

.box-footer h3{
    color:white;
    margin-bottom: 2vh;
}

.box{
    display: flex;
    flex-direction: column;
    gap: 0.9vh;
    align-items: center;

}
.box p {
    color: rgb(133, 131, 131);
}

    .box-special img{
        width:15vw;
        margin-top: 3vh;
    }

    .boxTextFooter{
        display: flex;
        align-items: center;
        margin-left: 10vh;
        justify-content: space-between;
    }
    .boxTextFooter h4{
        color: white;
    }
    .line{
        height: 5vh;
        width: 99vw;
        height: 2px;                
    background-color: rgb(133,131,131);     
    width: 90%;                 
    margin: 20px 0;   
    margin-left: 5vw;
    }

    .boxTextFooter p{
        color: rgb(133, 131, 131);
    }

    .text{
        display: flex;
        align-items: center;
        gap: 2.5vh
    }

    .languageCountry img{
        width: 1.5vw;
    }

    .languageCountry{
        display: flex;
        align-items: center;
        flex-direction: row;
        margin-right: 10vh;
        gap: 1.5vh;
    }
</style>