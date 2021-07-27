// window da qandaydir hodisa bolsa Umumiy windowni yuklab olgandan keyin function ishlasin

window.addEventListener('DOMContentLoaded', function(){
    
    let products = document.querySelectorAll('.product'),
        buttons = document.querySelectorAll('button'),
        openBtn = document.querySelector('.open');

    // funksiya yaratamiz
    function createCart(){

        // html da element yaratamiz
        let cart = document.createElement('div'),
            field = document.createElement('div'),
            heading = document.createElement('h2'),
            closeBtn = document.createElement('button');

        // html elementlariga class qoshamiz
        cart.classList.add('cart');
        field.classList.add('cart-field');
        closeBtn.classList.add('close');

        // button va heading ga text yozamiz js orqali
        heading.textContent = 'Bizning Savat';
        closeBtn.textContent = 'Yopish';

        // document body da appendChild funlsiya orqali bola qoshamoiz 
        document.body.appendChild(cart);

        // va qoshilgan bolaga yana bola qoshamiz
        cart.appendChild(heading);
        cart.appendChild(field);
        cart.appendChild(closeBtn);
    }

    createCart();

    // cart deb html da yaratgan elementimizni js da olib olamiz
    let cart = document.querySelector('.cart'),
        closeBtn = document.querySelector('.close'),
        field = document.querySelector('.cart-field')
        


    openBtn.addEventListener('click', function(){
        cart.style.display= 'block';
    });
    closeBtn.addEventListener('click', function(){
        cart.style.display= 'none';
    });


    buttons.forEach(function(item, i){
        item.addEventListener('click',function(){
            let copyEmementProduct = products[i].cloneNode(true), 
            btn = copyEmementProduct.querySelector('button');

            btn.remove();
            field.appendChild(copyEmementProduct);
            products[i].remove();
        }) 
    })

});
