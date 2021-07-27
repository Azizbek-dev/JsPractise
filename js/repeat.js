window.addEventListener('DOMContentLoaded', function(){
    let products = document.querySelectorAll('.product'),
        buttons = document.querySelectorAll('button'),
        openBtn = document.querySelector('.open');

        function createCart(){
            let cart = document.createElement('div'),
                field = document.createElement('div'),
                cartTitle = document.createElement('h2'),
                closeBtn = document.createElement('button');

            cartTitle.textContent = 'Sizning savatchangiz';
            closeBtn.textContent = 'Yopish';

            cart.classList.add('cart');
            field.classList.add('cart-field');
            closeBtn.classList.add('close');

            document.body.appendChild(cart);
            cart.appendChild(cartTitle);
            cart.appendChild(field);
            cart.appendChild(closeBtn);
        }

        createCart();

        let cart = document.querySelector('.cart'),
            field = document.querySelector('.cart-field');
            closeBtn = document.querySelector('.close');

        openBtn.addEventListener('click', function(){
            cart.style.display = 'block';
        })        
        closeBtn.addEventListener('click', function(){
            cart.style.display = 'none';
        })      
        
       buttons.forEach(function(item, i){
           item.addEventListener('click', function(){
               let copyItem = products[i].cloneNode(true),
               btn = copyItem.querySelector('button');

               btn.remove();
               field.appendChild(copyItem);
               products[i].remove();
           })
       })
});