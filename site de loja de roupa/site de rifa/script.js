const tabela = document.querySelector('.numeros');
const contador = document.getElementById('numeros-selecionados');
const btnWhatsapp = document.getElementById('btn-whatsapp');

// Função para criar a tabela
function criarTabela() {
    for (let i = 1; i <= 200; i++) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.textContent = i;
        td.addEventListener('click', () => {
            td.classList.toggle('selecionado');
            atualizarContador();
        });
        tr.appendChild(td);
        tabela.appendChild(tr);
    }
}

// Função para atualizar o contador
function atualizarContador() {
    const numerosSelecionados = document.querySelectorAll('.selecionado');
    contador.textContent = numerosSelecionados.length;
}


// Função para criar a tabela
function criarTabela() {
    let contadorLinha = 1;
    for (let i = 1; i <= 200; i++) {
        if (i % 10 === 1) {
            const tr = document.createElement('tr');
            tabela.appendChild(tr);
        }

        const td = document.createElement('td');
        td.textContent = i;
        td.addEventListener('click', () => {
            if (td.textContent === 'X') {
                td.textContent = i;
            } else {
                td.textContent = 'X';
            }
            atualizarContador();
        });
        tr.appendChild(td);
        contadorLinha++;
    }
}