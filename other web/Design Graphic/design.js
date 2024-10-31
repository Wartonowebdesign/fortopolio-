const logo = document.querySelector('.logo')
        const menuItem = document.querySelector('.menu-item')
        const heading = document.querySelector('.heading')
        const body = document.querySelector('body')
        const lamp = document.getElementById('lamp');
        lamp.onclick = function() {
            lamp.classList.toggle('active');
            body.classList.toggle('active');
            heading.classList.toggle('active');
            menuItem.classList.toggle('active');
            logo.classList.toggle('active');
        }
        let bars = document.querySelector('.bars');
        bars.onclick = function() {
            bars.classList.toggle('active')
        }