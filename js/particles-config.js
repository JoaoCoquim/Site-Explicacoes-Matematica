particlesJS('particles-js', {
    particles: {
      number: {
        value: 100,  // Número de partículas
        density: {
          enable: true,  // Ativa a densidade das partículas
          value_area: 800  // A área onde as partículas são distribuídas
        }
      },
      color: {
        value: "#ffffff"  // Cor das partículas (exemplo: branco)
      },
      shape: {
        type: "circle",  // Tipo de forma das partículas ("circle", "edge", "triangle", etc.)
        stroke: {
          width: 0,  // Espessura da borda
          color: "#000000"  // Cor da borda (exemplo: preto)
        }
      },
      opacity: {
        value: 0.5,  // Opacidade das partículas
        random: false,  // Se a opacidade deve ser aleatória
        anim: {
          enable: true,  // Se a opacidade pode ser animada
          speed: 1,  // Velocidade da animação de opacidade
          opacity_min: 0.1,  // Opacidade mínima durante a animação
          sync: false  // Se a animação deve ser sincronizada para todas as partículas
        }
      },
      size: {
        value: 3,  // Tamanho das partículas
        random: true,  // Se o tamanho deve ser aleatório
        anim: {
          enable: false,  // Se o tamanho pode ser animado
          speed: 40,  // Velocidade da animação de tamanho
          size_min: 0.1,  // Tamanho mínimo
          sync: false  // Se o tamanho deve ser sincronizado para todas as partículas
        }
      },
      line_linked: {
        enable: true,  // Se as partículas devem ser ligadas por linhas
        distance: 150,  // Distância máxima de ligação entre partículas
        color: "#ffffff",  // Cor das linhas de ligação
        opacity: 0.4,  // Opacidade das linhas de ligação
        width: 1  // Largura das linhas de ligação
      },
      move: {
        enable: true,  // Se as partículas devem se mover
        speed: 6,  // Velocidade de movimento das partículas
        direction: "none",  // Direção do movimento ("none", "top", "bottom", "left", "right")
        random: false,  // Se a direção deve ser aleatória
        straight: false,  // Se o movimento deve ser reto
        out_mode: "out",  // O que acontece quando uma partícula sai da tela (ex.: "out", "bounce")
        bounce: false,  // Se as partículas devem "quicar" nas bordas
        attract: {
          enable: false,  // Se as partículas devem ser atraídas por um ponto central
          rotateX: 600,  // Intensidade da atração no eixo X
          rotateY: 1200  // Intensidade da atração no eixo Y
        }
      }
    },
    interactivity: {
      detect_on: "canvas",  // Onde a interação é detectada (geralmente "canvas")
      events: {
        onhover: {
          enable: true,  // Se a interação no hover deve ser ativada
          mode: "repulse"  // Efeito ao passar o mouse ("repulse", "grab", "bubble")
        },
        onclick: {
          enable: true,  // Se a interação ao clicar deve ser ativada
          mode: "push"  // Efeito ao clicar (ex.: "push" adiciona partículas)
        }
      },
      modes: {
        repulse: {
          distance: 100,  // Distância da repulsão ao passar o mouse
          duration: 0.4  // Duração do efeito de repulsão
        },
        push: {
          particles_nb: 4  // Número de partículas a ser gerado ao clicar
        }
      }
    },
    retina_detect: true  // Detecta telas retina e ajusta o número de partículas
  });
  