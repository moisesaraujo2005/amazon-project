    <template>

        <section class="secaoCards">

            
    <div class="textosSection"> 
        <h1 class="titleCard">Related to items you've viewed</h1>
        <h5 class="viewAll">View All</h5>
    </div>
            <div class="cards">
                <div class="card"><img class="produtos" src="https://droper-media.s3.amazonaws.com/112202118436996.webp" alt="">
                    <p class="nomeProdutos">Nike - Blazer Mid</p>
                <div class="alinhamentoAvaliacao">  <img class="estrelasProdutos" src="../assets/avaliacao.png" alt=""> <img class="setaPraBaixo" src="../assets/seta-para-baixo.png" alt=""> <p class="qtdComprada">1,951</p></div>

                <div class="precoProduto">
                    <img class="cifraoDolar" src="../assets/simbolo-do-dolar.png" alt="">
                    <div class="prices">
                    <h4 class="precoPromotion">
                        60,00
                    </h4>
                    <h4 class="promotionPrice">
                        72,00
                    </h4>
                </div></div>

                <div class="deliveryProduct">
                    <div class="textDelivery">
                    <p>Delivery </p>
                    <p class="dayDelivery">Tue, Sep 17</p></div>
                    
                    <button class="cartDelivery">Add to cart</button>


                </div>
            </div>









                <div class="card"><img class="produtos" src="https://garmin.vtexassets.com/arquivos/ids/159175/FR265_azul2.jpg?v=638174511087500000" alt="">
                <p class="nomeProdutos">Garmin - Relógio </p> 
                <div class="alinhamentoAvaliacao">  <img class="estrelasProdutos" src="../assets/avaliacao.png" alt=""> <img class="setaPraBaixo" src="../assets/seta-para-baixo.png" alt=""> <p class="qtdComprada">1,951</p>
                    
                </div>
                <div class="precoProduto">
                    <img class="cifraoDolar" src="../assets/dollar-currency-symbol.png" alt="">
                    <div class="prices">
                    <h4 class="priceStandard">
                        220,00
                    </h4>
                   
                </div></div>

                <div class="deliveryProduct">
                    <div class="textDelivery">
                    <p>Delivery </p>
                    <p class="dayDelivery">Fri, Sep 27</p></div>
                    
                    <button class="cartDelivery">Add to cart</button>


                </div>
            </div>
                <div class="card"><img class="produtos" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHC40WOOQ81lqf8_3NXoPxiI2450FHTr7neg&s" alt="">
                    <p class="nomeProdutos">Sony - Câmera </p>
                
                    <div class="alinhamentoAvaliacao">  <img class="estrelasProdutos" src="../assets/avaliacao.png" alt=""> <img class="setaPraBaixo" src="../assets/seta-para-baixo.png" alt=""> <p class="qtdComprada">1,951</p></div>
                    <div class="precoProduto">
                    <img class="cifraoDolar" src="../assets/dollar-currency-symbol.png" alt="">
                    <div class="prices">
                    <h4 class="priceStandard">
                        250,00
                    </h4>
                   
                </div></div>

                <div class="deliveryProduct">
                    <div class="textDelivery">
                    <p>Delivery </p>
                    <p class="dayDelivery">Mon, Sep 23</p></div>
            
                    <button class="cartDelivery">Add to cart</button>


                </div></div>
                <div class="card"><img class="produtos" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-2S3Kl8PBV_DuaNbQcIy-v1Kd7lgR9ZuGiA&s" alt="">
                    <p class="nomeProdutos">Apple - Magic KeyBoard </p>
                
                    <div class="alinhamentoAvaliacao">  <img class="estrelasProdutos" src="../assets/avaliacao.png" alt=""> <img class="setaPraBaixo" src="../assets/seta-para-baixo.png" alt=""> <p class="qtdComprada">1,951</p></div>
                    <div class="precoProduto">
                    <img class="cifraoDolar" src="../assets/dollar-currency-symbol.png" alt="">
                    <div class="prices">
                    <h4 class="priceStandard">
                        160,00
                    </h4>
                   
                </div></div>

                <div class="deliveryProduct">
                    <div class="textDelivery">
                    <p>Delivery </p>
                    <p class="dayDelivery">Thu, Sep 26</p></div>
                    
                    <button class="cartDelivery">Add to cart</button>


                </div>
                </div>
                <div class="card"><img class="produtos" src="https://m.media-amazon.com/images/I/51m93rTRMkL.jpg" alt="">
                    <p class="nomeProdutos">QCY - Fone de ouvido</p>
                    <div class="alinhamentoAvaliacao">  <img class="estrelasProdutos" src="../assets/avaliacao.png" alt=""> <img class="setaPraBaixo" src="../assets/seta-para-baixo.png" alt=""> <p class="qtdComprada">1,951</p></div>
                    <div class="precoProduto">
                    <img class="cifraoDolar" src="../assets/dollar-currency-symbol.png" alt="">
                    <div class="prices">
                    <h4 class="priceStandard">
                        30,00
                    </h4>
                   
                </div></div>

                <div class="deliveryProduct">
                    <div class="textDelivery">
                    <p>Delivery </p>
                    <p class="dayDelivery">Wed, Sep 18</p></div>
                    
                    <button class="cartDelivery">Add to cart</button>


                </div>
                </div>



            </div>


    </section>

    </template>

    <style>

.textosSection {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 5vh;
}

.viewAll {
    display: flex;
    margin-left: auto;
    color: #FF9900;
    margin-right: 10vh;
}

.textosSection h1 {
    margin-left: 15vh;
}

.card {
    height: 70vh;
    width: 14vw;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.produtos {
    object-fit: contain;
    width: 13vw;
    height: 22vh;
}

.cards {
    display: flex;
    align-items: flex-start; 
    justify-content: center;
  
    gap: 7vh;
}

.nomeProdutos {
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
}

.estrelasProdutos {
    width: 5vw;
    height: 10vh;
    margin-right: 0.8vh;
}

.alinhamentoAvaliacao {
    display: flex;
    align-items: center;
}

.qtdComprada {
    color: #597FAF;
    font-size: 0.9rem;
}

.setaPraBaixo {
    width: 1.1vw;
}

.cifraoDolar {
    width: 1.2vw;
}

.precoProduto {
    display: flex;
    align-items: flex-start;
    margin-right: 3vh;
    height: 5vh;
}

.precoPromotion {
    font-size: 1.5rem;
    color: #00A8E1;
}

.promotionPrice {
    color: black;
    margin-left: 3vh;
    text-decoration: line-through;
    font-size: 1rem;
}

.prices {
    display: flex;
    align-items: flex-end;
}

.textDelivery {
    display: flex;
    align-items: center;
    gap: 0.9vh;
}

.dayDelivery {
    font-weight: bold;
}

.deliveryProduct {
    display: flex;
    flex-direction: column;
    gap: 2vh;
    align-items: center;
}

.cartDelivery {
    border-radius: 15px;
    height: 3vh; 
    color: black;
    background-color: #ffd814;
    font-weight: bold;
    width: 5.7vw;
    align-self: stretch; 
}

.priceStandard {
    font-size: 1.5rem;
    color: #000000;
}

    </style>