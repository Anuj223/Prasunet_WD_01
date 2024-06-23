const navbar= document.getElementById('navbar');

const colors = ['#bbaaaa','#5c5ceb','#50c550','#bbbb5e','#d79d34','#c998c9'];
const totalHT =document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', function() {
        const scrollY = window.scrollY; 
        const scrollFraction = scrollY / totalHT; 
        const colorIndex = Math.floor(scrollFraction * (colors.length - 1)); 
        navbar.style.backgroundColor = colors[colorIndex];
    });

document.querySelectorAll('#navbar ul li a').forEach(function (element) {
        element.addEventListener('mouseover',function(){
                this.style.color = '#ffffff';
        })
        element.addEventListener('mouseout',function()  {
                this.style.color = 'rgb(7, 7, 7)';
        })
})