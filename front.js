/* ========================================
   MARVEL-THEMED FRONT PAGE JAVASCRIPT
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const frontPageOverlay = document.getElementById('frontPageOverlay');
    const mainQuote = document.getElementById('mainQuote');
    const secondaryText = document.getElementById('secondaryText');
    const quoteAttribution = document.querySelector('.quote-attribution');
    const buttonContainer = document.querySelector('.button-container');
    const statsPreview = document.querySelector('.stats-preview');
    const loadingBar = document.getElementById('loadingBar');
    const particlesContainer = document.getElementById('particlesContainer');
    const networkCanvas = document.getElementById('networkCanvas');

    // Initialize Neural Network Canvas
    function initNeuralNetwork() {
        if (!networkCanvas) return;
        
        const ctx = networkCanvas.getContext('2d');
        networkCanvas.width = window.innerWidth;
        networkCanvas.height = window.innerHeight;

        const nodes = [];
        const nodeCount = 50;
        const connectionDistance = 150;

        // Create nodes
        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * networkCanvas.width,
                y: Math.random() * networkCanvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1
            });
        }

        function animate() {
            ctx.clearRect(0, 0, networkCanvas.width, networkCanvas.height);

            // Update and draw nodes
            nodes.forEach((node, i) => {
                // Update position
                node.x += node.vx;
                node.y += node.vy;

                // Bounce off edges
                if (node.x < 0 || node.x > networkCanvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > networkCanvas.height) node.vy *= -1;

                // Draw connections
                nodes.forEach((other, j) => {
                    if (i === j) return;
                    const dx = other.x - node.x;
                    const dy = other.y - node.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const opacity = (1 - distance / connectionDistance) * 0.3;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 191, 255, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.stroke();
                    }
                });

                // Draw node
                ctx.beginPath();
                ctx.fillStyle = 'rgba(0, 191, 255, 0.6)';
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(animate);
        }

        animate();

        // Handle resize
        window.addEventListener('resize', () => {
            networkCanvas.width = window.innerWidth;
            networkCanvas.height = window.innerHeight;
        });
    }

    // Create floating particles
    function createParticles() {
        if (!particlesContainer) return;
        
        const particleCount = 20;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
            particlesContainer.appendChild(particle);
        }
    }

    // Animate loading bar
    function animateLoading() {
        if (!loadingBar) return;
        
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
            }
            loadingBar.style.width = progress + '%';
        }, 200);
    }

    // Animate stats counter
    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.dataset.target);
            const duration = 2000;
            const start = performance.now();
            
            function updateCounter(currentTime) {
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(easeOut * target);
                
                stat.textContent = current.toLocaleString();
                
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target.toLocaleString();
                }
            }
            
            requestAnimationFrame(updateCounter);
        });
    }

    // Initialize animations sequence
    function initAnimations() {
        // Start loading bar
        animateLoading();
        
        // Show main quote after a brief delay
        setTimeout(() => {
            if (mainQuote) {
                mainQuote.classList.add('visible', 'animate');
            }
        }, 300);

        // Show secondary text
        setTimeout(() => {
            if (secondaryText) {
                secondaryText.classList.add('visible');
            }
        }, 1500);

        // Show attribution
        setTimeout(() => {
            if (quoteAttribution) {
                quoteAttribution.classList.add('visible');
            }
        }, 2000);

        // Show button
        setTimeout(() => {
            if (buttonContainer) {
                buttonContainer.classList.add('visible');
            }
        }, 2200);

        // Show stats and animate counters
        setTimeout(() => {
            if (statsPreview) {
                statsPreview.classList.add('visible');
                animateStats();
            }
        }, 2500);
    }

    // Handle navigation to portfolio
    function navigateToPortfolio(e) {
        if (e) e.preventDefault();
        
        frontPageOverlay.classList.add('transitioning');
        
        setTimeout(() => {
            window.location.href = 'portfolio.html';
        }, 600);
    }

    // Event Listeners
    const enterButton = document.getElementById('enterButton');
    if (enterButton) {
        enterButton.addEventListener('click', navigateToPortfolio);
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            navigateToPortfolio(e);
        }
    });

    // Click anywhere to enter (except button which has its own handler)
    frontPageOverlay.addEventListener('click', (e) => {
        if (!e.target.closest('.portfolio-button')) {
            navigateToPortfolio(e);
        }
    });

    // Initialize everything
    initNeuralNetwork();
    createParticles();
    initAnimations();

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
    }
});
