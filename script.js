


// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
            navbar.style.background = '#021a55';
        } else {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            navbar.style.background = '#021a55';
        }

        lastScroll = currentScroll;
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .pricing-card, .contact-item');
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Pricing card buttons
    const pricingButtons = document.querySelectorAll('.pricing-card .btn');
    pricingButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const planName = this.closest('.pricing-card').querySelector('.pricing-name').textContent;
            
            // Show alert (in a real scenario, this would redirect to payment or contact)
            showNotification(Vous avez sélectionné le forfait ${planName}. Nous vous contacterons bientôt !);
            
            // Scroll to contact form
            setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 1500);
        });
    });

    // WhatsApp Contact Section - No form validation needed as we use direct WhatsApp links

    // Notification function
    function showNotification(message, type = 'success') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = notification ${type};
        notification.textContent = message;
        
        // Style the notification
        notification.style.position = 'fixed';
        notification.style.top = '100px';
        notification.style.right = '20px';
        notification.style.padding = '1rem 1.5rem';
        notification.style.borderRadius = '10px';
        notification.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
        notification.style.zIndex = '10000';
        notification.style.maxWidth = '400px';
        notification.style.fontSize = '1rem';
        notification.style.fontWeight = '500';
        notification.style.animation = 'slideInRight 0.3s ease';
        
        if (type === 'success') {
            notification.style.background = '#10b981';
            notification.style.color = '#ffffff';
        } else {
            notification.style.background = '#ef4444';
            notification.style.color = '#ffffff';
        }

        // Add to page
        document.body.appendChild(notification);

        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }

    // Add animation keyframes for notification
    const style = document.createElement('style');
    style.textContent = 
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    ;
    document.head.appendChild(style);

    // Counter animation for stats (if you want to add animated counters later)
    function animateCounter(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.textContent = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Add hover effect for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = '#f8fafc';
        });
    });

    // Add pulse animation to CTA button
    const ctaButton = document.querySelector('.cta .btn');
    if (ctaButton) {
        setInterval(() => {
            ctaButton.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
                ctaButton.style.animation = '';
            }, 500);
        }, 3000);
    }

    // Add pulse animation keyframes
    const pulseStyle = document.createElement('style');
    pulseStyle.textContent = 
        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
            100% {
                transform: scale(1);
            }
        }
    ;
    document.head.appendChild(pulseStyle);

    // Add active state to nav links based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === #${sectionId}) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Prevent form submission on enter key (except in textarea)
    document.querySelectorAll('.contact-form input').forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
            }
        });
    });

    // Add focus effect to form inputs
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
            this.parentElement.style.transition = 'transform 0.2s ease';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });

    console.log('ABED Network Website - Loaded Successfully! 🚀');
});

Ton code JavaScript est bien structuré et il fait plusieurs choses pour ton site (probablement pour ABED Network). Je vais t’expliquer simplement chaque partie pour que tu comprennes bien.

1️⃣ Attendre que la page charge
document.addEventListener('DOMContentLoaded', function() {
Cela signifie :

➡️ Le script attend que toute la page HTML soit chargée avant d'exécuter le code.

Sinon certaines parties du site pourraient ne pas fonctionner.

2️⃣ Menu mobile (hamburger)
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
Cela récupère :

le bouton menu

le menu navigation

Quand on clique :

navMenu.classList.toggle('active');
➡️ Le menu s’ouvre ou se ferme

Et les 3 lignes du hamburger se transforment en croix.

3️⃣ Fermer le menu quand on clique un lien
navLinks.forEach(link => {
Quand quelqu’un clique sur :

Accueil

Services

Prix

Contact

➡️ le menu se ferme automatiquement

Très important pour mobile.

4️⃣ Scroll fluide (smooth scroll)
window.scrollTo({
top: offsetTop,
behavior: 'smooth'
});
Quand on clique :

#services
#contact
#pricing
➡️ La page descend doucement

Au lieu de sauter directement.

5️⃣ Effet sur la navbar quand on scroll
window.addEventListener('scroll'
Quand la page descend :

✔ la navbar reçoit une ombre
✔ effet plus professionnel

6️⃣ Animation des cartes (Fade In)
IntersectionObserver
Quand un élément apparaît à l'écran :

feature-card

pricing-card

contact-item

➡️ il apparaît doucement

Animation :

opacity
translateY
Très moderne.

7️⃣ Boutons des forfaits internet
Quand quelqu’un clique sur un forfait :

Vous avez sélectionné le forfait ...
➡️ Une notification apparaît

Puis :

➡️ la page descend vers Contact

8️⃣ Notification personnalisée
Fonction :

showNotification()
Elle crée une petite fenêtre popup.

Exemple :

Vous avez sélectionné le forfait Premium
Elle disparaît après 5 secondes.

9️⃣ Animation de notification
slideInRight
slideOutRight
La notification :

➡️ entre par la droite
➡️ sort après 5 secondes

🔟 Animation compteur
Fonction :

animateCounter()
Elle permet de faire :

0 → 100
progressivement.

Exemple :

500 clients
1000 utilisateurs
Animation souvent utilisée sur les sites modernes.

11️⃣ Effet hover des services
Quand la souris passe sur une carte :

card.addEventListener('mouseenter'
➡️ le fond change en dégradé

Quand la souris quitte :

➡️ couleur normale.

12️⃣ Animation du bouton CTA
Bouton principal :

Commencer maintenant
Toutes les 3 secondes

➡️ il fait un petit zoom pulse

Pour attirer l’attention.

13️⃣ Menu actif selon la section
Quand tu descends dans la page :

Accueil
Services
Prix
Contact
➡️ le menu active automatiquement la section actuelle.

Très professionnel.

14️⃣ Empêcher envoi du formulaire avec ENTER
if (e.key === 'Enter')
Si quelqu’un appuie sur Entrée :

➡️ le formulaire ne s’envoie pas automatiquement.

15️⃣ Animation des champs formulaire
Quand on clique dans un champ :

Nom
Email
Message
➡️ il se soulève légèrement

Effet très propre.

16️⃣ Message console
console.log('ABED Network Website - Loaded Successfully! 🚀');
Dans la console du navigateur on verra :

ABED Network Website - Loaded Successfully! 🚀
Cela confirme que le site fonctionne.

⭐ En résumé ton script fait :
✔ Menu mobile
✔ Animation navigation
✔ Scroll fluide
✔ Animations au scroll
✔ Notifications
✔ Effets hover
✔ Bouton animé
✔ Navigation active
✔ Formulaire amélioré

C'est un script très complet pour un site moderne.

💡 Si tu veux, je peux aussi te montrer :

10 améliorations pour rendre ton site encore plus professionnel

comment accélérer ce script

comment le rendre plus sécurisé

comment ajouter des animations premium

Ton site pourrait devenir niveau entreprise très facilement. 🚀


corrige c'est pour uun site et donne html en entier

Voici le script corrigé et intégré dans un HTML complet pour un site web.
Le code est simplifié, corrigé et prêt à fonctionner.

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
✅ Ce fichier contient :

HTML complet

CSS intégré

JavaScript corrigé

Menu mobile

animations

notification

scroll fluide

Si tu veux, je peux aussi te donner :

une version beaucoup plus professionnelle (niveau entreprise)

une landing page internet ISP complète pour ton réseau

une version ultra moderne 2026 avec animations futuristes.



