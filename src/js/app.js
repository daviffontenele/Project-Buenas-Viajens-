// Seleciona todos os cards de depoimento
    const slides = document.querySelectorAll('.depoimento_card');
    const btnAnt = document.getElementById('btn_ant');
    const btnProx = document.getElementById('btn_prox');
    
    let slideIndex = 0;
    let timerAutoplay;

    // Função que muda o slide ativo
    function mostrarSlide(index) {
        // Remove a classe 'ativo' de todos os cards
        slides.forEach(slide => slide.classList.remove('ativo'));
        
        // Controla os limites (se passar do fim volta pro início, se for menor que zero vai pro fim)
        if (index >= slides.length) { slideIndex = 0; }
        if (index < 0) { slideIndex = slides.length - 1; }
        
        // Adiciona a classe 'ativo' no card da vez
        slides[slideIndex].classList.add('ativo');
    }

    // Avança para o próximo slide
    function proximoSlide() {
        slideIndex++;
        mostrarSlide(slideIndex);
    }

    // Volta para o slide anterior
    function slideAnterior() {
        slideIndex--;
        mostrarSlide(slideIndex);
    }

    // Configura o timer para rodar sozinho a cada 5000ms (5 segundos)
    function iniciarAutoplay() {
        clearInterval(timerAutoplay); // Limpa o timer anterior para não duplicar
        timerAutoplay = setInterval(proximoSlide, 5000);
    }

    // Ouvintes de clique para os botões das setas manuais
    btnProx.addEventListener('click', () => {
        proximoSlide();
        iniciarAutoplay(); // Reinicia o contador de 5s após o clique manual
    });

    btnAnt.addEventListener('click', () => {
        slideAnterior();
        iniciarAutoplay(); // Reinicia o contador de 5s após o clique manual
    });

    // Dispara o carrossel assim que a página carrega
    iniciarAutoplay();