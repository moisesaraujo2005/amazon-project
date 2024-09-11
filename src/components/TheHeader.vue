<template>

        <header>
            <img class="logoAmazon" src="../assets/logoAmazon.png" alt="logoAmazon">
            <div class="menuECategoria">
            <img src="../assets/menuHamburguer.png" class="menuHamburguer" alt="menuHamburguer">
            <div class="categoriaHeader">
            <p class="selectHeader">Select</p> 
            <div class="alinhamentoSeta">
            <h4 class="categoryHeader">Category  </h4>
            <img src="../assets/down-arrow.png" alt="setaConta" class="setaBaixo"></div>
        </div></div>

            <div class="barraPesquisaHeader">
                <input type="text" placeholder=" Search" class="barraPesquisa">
                <img class="lupaHeader" src="../assets/lupaAmazon.jpg" alt="lupaPesquisar">
            </div>

            <div class="userHeader">
                <img class="iconUser" src="../assets/moisesIcon.jpeg" alt="iconUser">
                <div class="categoryUser">

                <p>Hello, Moisés</p>
                <div class="alinhamentoSeta">
                <h4>Account & Lists </h4>
                <img src="../assets/down-arrow.png" alt="setaConta" class="setaBaixo"></div>
        </div>

        <div class="carrinhoCompraHeader">

                <img class="carrinhoCompra" src="../assets/carrinhoCompras.png " alt="carrinhoCompras">
        </div>

            </div>
        </header>


</template>


<script>



</script>


<style>

header {
        background-color: #141B24;
        min-height: 14vh;
        width: 100%;
        display: flex;
        align-items: center;
        
        justify-content: space-evenly;
        padding: 0 2vw;
        box-sizing: border-box;
        margin: 0;
}

.logoAmazon {
        width: 7vw;
        height: 14vh;
   
}
.menuECategoria {
  display: flex; 
  align-items: center; 
  gap: 1vw; 
}
.menuHamburguer {
        width: 2vw;
       
}

.selectHeader{
        color: white;
}

.categoryHeader {
        color: white;
        font-size: 14px;
}

.lupaHeader {
        width: 2.8vw;
    height: 5.6vh;
    background-color: orange;
    border-radius: 1px;
    margin-top: 0.2vh;
}

.barraPesquisaHeader {
        display: flex;
        align-items: center;
}

.barraPesquisa {
        width: 40vw;
        height: 5.777vh;
        font-size: 17px;
        border-radius: 2px;
}

.iconUser {
        width: 2.8vw;
        border-radius: 25px;
}

.categoryUser {
        font-size: 12.5px;
        color: white;
}

.userHeader {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 3vh;
}

.carrinhoCompra {
        width: 2.1vw;
}

.setaBaixo {
        width: 0.7vw      ;
}

.alinhamentoSeta {
        display: flex;
        align-items: center;
        gap: 0.8vh;
}

.carrinhoCompraHeader {
        margin-left: 3vh;
}
</style>