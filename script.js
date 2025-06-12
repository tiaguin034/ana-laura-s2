document.addEventListener('DOMContentLoaded', function() {
  // Adicionar classe sparkle ao título
  const title = document.querySelector('h1');
  if (title) title.classList.add('sparkle');
  const messages = [
    "Te amar é a melhor escolha que já fiz...",
    "Eu te amo mais do que as palavras podem expressar...",
    "O melhor presente é ter você ao meu lado...",
    "Sou completamente viciado no seu amor...",
    "Estar ao seu lado me faz feliz...",
    "Você me faz sentir o amor que jamais senti...",
    "Quando que estou com você, tenho as melhores risadas...",
    "Sou a pessoa mais sortuda por ter você ao meu lado...",
    "Sempre vou estar aqui para te apoiar...",
    "Sempre vou estar aqui para te criticar...",
    "e...",
    "Sempre vou te amar! ❤️"
  ];
  // Fotos de memórias (substitua com suas próprias fotos)
    const photos = [
        "imagens/memoria1.jpg",
        "imagens/memoria2.jpg",
        "imagens/memoria3.jpg",
        "imagens/memoria4.jpg",
        "imagens/memoria5.jpg",
        "imagens/memoria6.jpg",
        "imagens/memoria7.jpg",
        "imagens/memoria8.jpg",
        "imagens/memoria9.jpg"
    ];

    const messageElement = document.getElementById('love-message');
    const showMessageBtn = document.getElementById('show-message');
    const galleryElement = document.querySelector('.galery');

    // Mostrar mensagem especial
    showMessageBtn.addEventListener('click', function() {
        let currentIndex = 0;

        function showNextMessage() {
            messageElement.textContent = messages[currentIndex];
            currentIndex = (currentIndex + 1) % messages.length;
        }

        // Mostrar todas as mensagens uma após a outra
        showNextMessage();

        const interval = setInterval(() => {
            showNextMessage();
        }, 3000);

        // Parar após mostrar todas as mensagens uma vez
        setTimeout(() => {
            clearInterval(interval);
            messageElement.textContent = "Eu te amo muito! Feliz Dia dos Namorados! ❤️";
        }, messages.length * 3000);

        // Esconder o botão após o clique
        this.style.display = 'none';
    });

    // Criar carrossel de fotos
    function createCarousel() {
        // Criar container do carrossel
        const carouselContainer = document.createElement('div');
        carouselContainer.className = 'carousel-container';
        
        // Dividir fotos em grupos de 3
        const slidesData = [];
        for (let i = 0; i < photos.length; i += 3) {
            slidesData.push(photos.slice(i, i + 3));
        }
        
        // Criar slides
        slidesData.forEach((slidePhotos, slideIndex) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            
            slidePhotos.forEach(photo => {
                const imgElement = document.createElement('img');
                imgElement.src = photo;
                imgElement.alt = "Nossa memória";
                slide.appendChild(imgElement);
            });
            
            carouselContainer.appendChild(slide);
        });
        
        galleryElement.appendChild(carouselContainer);
        
        // Criar indicadores
        if (slidesData.length > 1) {
            const indicatorsContainer = document.createElement('div');
            indicatorsContainer.className = 'carousel-indicators';
            
            slidesData.forEach((_, index) => {
                const indicator = document.createElement('div');
                indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
                indicator.addEventListener('click', () => goToSlide(index));
                indicatorsContainer.appendChild(indicator);
            });
            
            galleryElement.appendChild(indicatorsContainer);
        }
        
        return { carouselContainer, slidesData };
    }
    
    const { carouselContainer, slidesData } = createCarousel();
    
    // Controle do carrossel
    let currentSlide = 0;
    
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        const translateX = -slideIndex * 100;
        carouselContainer.style.transform = `translateX(${translateX}%)`;
        
        // Atualizar indicadores
        document.querySelectorAll('.indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === slideIndex);
        });
    }
    
    function nextSlide() {
        if (slidesData.length <= 1) return;
        currentSlide = (currentSlide + 1) % slidesData.length;
        goToSlide(currentSlide);
    }
    
    // Auto-play do carrossel (muda a cada 4 segundos)
    if (slidesData.length > 1) {
        setInterval(nextSlide, 4000);
    }

    // Contador simples de dias juntos
    function updateDaysCounter() {
        const now = new Date();
        const meetingDate = new Date('2024-11-30T00:00:00');
        const diff = now - meetingDate;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        
        // Atualizar dias juntos
        document.getElementById('days-together').textContent = days;
    }

    // Inicializar contador e atualizar a cada minuto
    updateDaysCounter();
    setInterval(updateDaysCounter, 60000); // Atualiza a cada minuto

    // Elementos mágicos flutuantes
    function createFloatingElement() {
        const elements = ['🌟', '✨', '💫', '🦋', '🌸', '🌺', '💐', '🌹'];
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.innerHTML = elements[Math.floor(Math.random() * elements.length)];
        element.style.fontSize = `${Math.random() * 20 + 20}px`;
        element.style.left = `${Math.random() * 100}vw`;
        
        document.body.appendChild(element);

        setTimeout(() => {
            element.remove();
        }, 8000);
    }

    // Criar elementos flutuantes periodicamente
    setInterval(createFloatingElement, 3000);

    // Efeito de coração ao clicar
    document.addEventListener('click', function(e) {
        if (e.target.tagName !== 'BUTTON') {
            createHeart(e.clientX, e.clientY);
        }
    });

    function createHeart(x, y) {
        const heart = document.createElement('div');
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        heart.classList.add('heart');
        
        // Array de corações coloridos
        const hearts = ['❤️', '💖', '💕', '💗', '💝', '💘'];
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        
        // Tamanho aleatório
        const size = Math.random() * 10 + 15;
        heart.style.fontSize = `${size}px`;
        
        // Posição ligeiramente aleatória
        heart.style.left = `${x + (Math.random() - 0.5) * 20}px`;
        
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
});
