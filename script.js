document.addEventListener('DOMContentLoaded', function() {
    const chessboard = document.getElementById('chessboard');

    // Função para criar o tabuleiro
    function criarTabuleiro() {
        // Cria 8 linhas
        for (let linha = 0; linha < 8; linha++) {
            for (let coluna = 0; coluna < 8; coluna++) {
                let quadrado = document.createElement('div');
                quadrado.classList.add('square');

                if ((linha + coluna) % 2 === 0) {
                    quadrado.classList.add('light');
                } else {
                    quadrado.classList.add('dark');
                }

                chessboard.appendChild(quadrado);
            }
        }
    }

    criarTabuleiro();
});
