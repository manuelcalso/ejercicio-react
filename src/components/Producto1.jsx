import imagenBitcoin from "./../assets/bitcoin.jpg"
export const Producto1 = () => {
    return(
        <div className="producto1">
            <h3>Bitcoin</h3>
            <p>La criptomoneda mas importante del mercado</p>
            <img src={imagenBitcoin} alt="bitcoin-logo"></img> 
        </div>
    )
}

