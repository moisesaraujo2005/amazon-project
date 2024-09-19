<template>
    <section class="secaoCards">
        <div class="textosSection">
            <h1 class="titleCard">Your browsing history</h1>
            <h5 class="viewAll">View All</h5>
        </div>
        <div class="cards">
            <div v-for="(product, index) in products" :key="product.id" class="card">
                <img class="produtos" :src="product.image" alt="">
                <p class="nomeProdutos">{{ product.name }}</p>
                <div class="alinhamentoAvaliacao">
                    <img class="estrelasProdutos" src="../assets/avaliacao.png" alt="">
                    <img class="setaPraBaixo" src="../assets/seta-para-baixo.png" alt="">
                    <p class="qtdComprada">{{ product.sold }}</p>
                </div>
                <div class="precoProduto">
                    <img class="cifraoDolar" src="../assets/dollar-currency-symbol.png" alt="">
                    <div class="prices">
                        <h4 class="precoPromotion" v-if="product.discountedPrice">
                            {{ product.discountedPrice }}
                        </h4>
                        <h4 class="promotionPrice" v-if="product.discountedPrice">
                            {{ product.originalPrice }}
                        </h4>
                        <h4 class="priceStandard" v-else>
                            {{ product.originalPrice }}
                        </h4>
                    </div>
                </div>
                <div class="deliveryProduct">
                    <div class="textDelivery">
                        <p>Delivery</p>
                        <p class="dayDelivery">{{ product.deliveryDate }}</p>
                    </div>
                    <div class="buttonCart">
                        <button v-if="!product.addedToCart" @click="addProduct(index)" class="cartDelivery">
                            Add to cart
                        </button>

                        <div class="removerProduct" v-if="product.showTeste">
                            <p>1 in cart -</p> <p style="color: #007185
" class="removerCart" @click="removeProduct(index)">Remove</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>



export default {
    data() {
        return {
            teste: false,
            products: [
                {
                    id: 1,
                    name: 'New Balance - 574 Core',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1pae56gHFfSRk6D5g2sbwWn86Mwww2BS3tg&s',
                    sold: '2,072',
                  
                    originalPrice: '90,00',
                    deliveryDate: 'Tue, Sep 16',
                    addedToCart: false,
                    showTeste: false


                },
                {
                    id: 2,
                    name: 'Vans - Anaheim Factory',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGt7_3ifsv2Qv0OQYKF71jQo2KF5tQL39vA&s',
                    sold: '245',
                    originalPrice: '105,00',
                    deliveryDate: 'Fri, Sep 22',
                    addedToCart: false,
                    showTeste: false

                },
                {
                    id: 3,
                    name: 'Nike - SB Zoom Blazer',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy84aZYv4ca8XjB2vxaRpJxz0T5t4zgSYRVQ&s',
                    sold: '789',
                    originalPrice: '250,00',
                    deliveryDate: 'Mon, Sep 23',
                    addedToCart: false,
                    showTeste: false

                },
                {
                    id: 4,
                    name: 'Vans - Half-Cab',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqZQe6Hd0tA2z9LWHMeJJKWroltUIefGuqzA&s',
                    sold: '860',
                    originalPrice: '85,00',
                    deliveryDate: 'Thu, Sep 06',
                    addedToCart: false,
                    showTeste: false

                },
                {
                    id: 5,
                    name: 'Converse - Smoke in Pro',
                    image: 'https://cdn.sneakerbaron.nl/uploads/2020/08/23135059/Converse-Unisex-Smoke-In-Pro-Leather-High-Top-Navy-169119C-700x414.png',
                    sold: '1,951',
                    discountedPrice: '130,00',
                    originalPrice: '156,00',
                    deliveryDate: 'Wed, Sep 12',
                    addedToCart: false,
                    showTeste: false

                }
            ]
        }
    },
    
    methods: {

        addProduct(index) {
            const product = this.products[index];
            this.$store.commit('addProduct', product);
            this.products[index].addedToCart = true;
            this.products[index].showTeste = true;
        },
        removeProduct(index) {
            
            const product = this.products[index];
            this.$store.commit('removeProduct', product.id);
            this.products[index].addedToCart = false;
            this.products[index].showTeste = false;

        }
    },
    
}


</script>
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
    cursor: pointer;
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
    border: none;
    cursor: pointer;
}

.priceStandard {
    font-size: 1.5rem;
    color: #000000;
}

.buttonCart {
    display: flex;
    align-items: flex-start;
    height: 7vh;
    width: 10vw;
}

.removerProduct{
    display: flex;
    align-items: center;
    gap: 0.7vh;
}

.removerProduct p {
    color: #565959;
    cursor: pointer;
    font-weight: bold;
}

@media screen and (max-width: 768px) { 
    .secaoCards{
        height: 110vh;
    }
    .card:nth-child(5) {
        display: none;
    }
    .cards {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    
        align-items: start; 
    }

    .card {
        width: 100%; 
        height: auto; 
    }

    .textosSection h1{
        margin: 0;
        font-size: 15px
    }
    .textosSection{
        justify-content: space-evenly
    }
    .viewAll {
        margin: 0
    }

    .nomeProdutos{
        font-size: 9px;
    }

    .qtdComprada{
        font-size: 13px
    }

    .priceStandard{
        font-size: 17px;
    }
    .cards{
        gap: 2vh;
    }

    .precoPromotion{
        font-size: 17px;
    }

    .promotionPrice{
        font-size: 14px;
        margin: 0
    }

    .textDelivery{
        font-size: 13px
    }
    .prices {
    font-size: 18px;
    display: flex;
    align-items: normal;

 
    gap: 1vh; }

    .setaPraBaixo {
    width: 2.9vw;
}
    .card{
        height: 40vh;
        margin-top: 10vh;
    }

    .removerProduct p {
        font-size :13px
    }

    .cartDelivery{
        font-size: 9px;
        height: 4vh;
        width: 16vw;
        border: none;
    }

    .produtos{
        height: 13vh;
        width : 27vw;
        object-fit: cover;
    }

    .precoProduto {
        margin: 0;
        height: 4vh;
    }

.estrelasProdutos{
    width: 19vw;
}
.buttonCart{
    width: 16vw;
   
}



.cifraoDolar {
    width: 3.2vw;
}


}


</style>