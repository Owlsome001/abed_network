<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ABED Network</title>

<style>

body{
margin:0;
font-family:Arial;
background:#f8fafc;
}

.navbar{
position:fixed;
top:0;
width:100%;
background:#021a55;
color:white;
display:flex;
justify-content:space-between;
align-items:center;
padding:15px 20px;
z-index:1000;
}

.logo{
font-size:20px;
font-weight:bold;
}

.nav-menu{
display:flex;
gap:20px;
}

.nav-menu a{
color:white;
text-decoration:none;
}

.nav-toggle{
display:none;
flex-direction:column;
cursor:pointer;
}

.nav-toggle span{
width:25px;
height:3px;
background:white;
margin:4px 0;
transition:0.3s;
}

section{
padding:120px 20px;
min-height:100vh;
}

.feature-card,
.pricing-card,
.contact-item{
background:white;
padding:20px;
margin:10px 0;
border-radius:10px;
box-shadow:0 2px 10px rgba(0,0,0,0.1);
}

.btn{
display:inline-block;
background:#2563eb;
color:white;
padding:10px 20px;
border-radius:6px;
text-decoration:none;
}

.cta{
text-align:center;
margin-top:40px;
}

@media(max-width:768px){

.nav-menu{
position:absolute;
top:60px;
left:0;
width:100%;
background:#021a55;
flex-direction:column;
display:none;
}

.nav-menu.active{
display:flex;
}

.nav-toggle{
display:flex;
}

}

</style>
</head>

<body>

<header class="navbar">

<div class="logo">ABED Network</div>

<div class="nav-toggle" id="navToggle">
<span></span>
<span></span>
<span></span>
</div>

<nav class="nav-menu" id="navMenu">
<a class="nav-link" href="#home">Accueil</a>
<a class="nav-link" href="#services">Services</a>
<a class="nav-link" href="#pricing">Forfaits</a>
<a class="nav-link" href="#contact">Contact</a>
</nav>

</header>


<section id="home">
<h1>Bienvenue chez ABED Network</h1>
<p>Internet rapide et fiable.</p>

<div class="cta">
<a class="btn" href="#pricing">Voir les forfaits</a>
</div>
</section>


<section id="services">

<h2>Nos services</h2>

<div class="feature-card">Internet Haute Vitesse</div>
<div class="feature-card">Installation Rapide</div>
<div class="feature-card">Support 24/7</div>

</section>


<section id="pricing">

<h2>Nos forfaits</h2>

<div class="pricing-card">
<h3 class="pricing-name">Basic</h3>
<p>Internet pour usage simple</p>
<a href="#" class="btn">Choisir</a>
</div>

<div class="pricing-card">
<h3 class="pricing-name">Standard</h3>
<p>Internet rapide pour maison</p>
<a href="#" class="btn">Choisir</a>
</div>

<div class="pricing-card">
<h3 class="pricing-name">Premium</h3>
<p>Internet ultra rapide</p>
<a href="#" class="btn">Choisir</a>
</div>

</section>


<section id="contact">

<h2>Contact</h2>

<div class="contact-item">
WhatsApp : +243000000000
</div>

</section>


<script>

document.addEventListener('DOMContentLoaded', function() {

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', function() {

navMenu.classList.toggle('active');

const spans = navToggle.querySelectorAll('span');

if(navMenu.classList.contains('active')){

spans[0].style.transform='rotate(45deg) translate(5px,5px)';
spans[1].style.opacity='0';
spans[2].style.transform='rotate(-45deg) translate(7px,-6px)';

}else{

spans[0].style.transform='none';
spans[1].style.opacity='1';
spans[2].style.transform='none';

}

});


navLinks.forEach(link=>{
link.addEventListener('click',function(){

navMenu.classList.remove('active');

const spans = navToggle.querySelectorAll('span');

spans[0].style.transform='none';
spans[1].style.opacity='1';
spans[2].style.transform='none';

});
});


document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener('click',function(e){

e.preventDefault();

const targetId = this.getAttribute('href');

if(targetId==='#') return;

const targetElement = document.querySelector(targetId);

window.scrollTo({
top:targetElement.offsetTop-80,
behavior:'smooth'
});

});
});


const observer = new IntersectionObserver(function(entries){

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity='1';
entry.target.style.transform='translateY(0)';

}

});

},{threshold:0.1});


const animateElements = document.querySelectorAll('.feature-card,.pricing-card,.contact-item');

animateElements.forEach(element=>{

element.style.opacity='0';
element.style.transform='translateY(30px)';
element.style.transition='0.6s';

observer.observe(element);

});


const pricingButtons=document.querySelectorAll('.pricing-card .btn');

pricingButtons.forEach(button=>{

button.addEventListener('click',function(e){

e.preventDefault();

const planName=this.closest('.pricing-card').querySelector('.pricing-name').textContent;

showNotification("Vous avez sélectionné le forfait "+planName);

});

});


function showNotification(message){

const notification=document.createElement('div');

notification.textContent=message;

notification.style.position='fixed';
notification.style.top='100px';
notification.style.right='20px';
notification.style.background='#10b981';
notification.style.color='white';
notification.style.padding='15px';
notification.style.borderRadius='8px';
notification.style.boxShadow='0 10px 20px rgba(0,0,0,0.2)';
notification.style.zIndex='9999';

document.body.appendChild(notification);

setTimeout(()=>{
notification.remove();
},4000);

}

console.log("ABED Network site chargé");

});

</script>

</body>
</html>
