
// almacenar los productos seleccionados 


function addToCart(productName,price){
    let cart=JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({productName,price});
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} se añadio al carrito`)

}

// cargar al carrito de comparas 
if(window.location.pathname.includes('cart.html')){
    const cart=JSON.parse(localStorage.getItem('cart')) || [];
    const carContainer=document.getElementById('cart');
    const totalContainer=document.getElementById('total');

    if(cart.length === 0){
        carContainer.innerHTML='<p> El carrito esta vacio </p>';
    }else{
        let total=0;
        cart.forEach(item => {
            const productElement = document.createElement('p');
            productElement.textContent=`${item.productName} - $${item.price}`;
            carContainer.appendChild(productElement);
            total+=item.price;
        });
        totalContainer.textContent=total;
    }
    }
    function clearCart() {
        localStorage.removeItem('cart'); // Borra todo el carrito
        alert('El carrito ha sido vaciado.');
        location.reload(); // Recarga la página para actualizar la vista
    }
    
    function checkout() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart.length === 0) {
            alert('El carrito está vacío.');
        } else {
            alert('¡Gracias por tu compra!');
            localStorage.removeItem('cart');
            location.reload(); // Recarga para vaciar la vista del carrito
        }
    }
    