// Neste exercício, você criará um temporizador de contagem regressiva que aceita uma data futura e conta o tempo restante até essa data. O temporizador exibirá os dias, horas, minutos e segundos restantes e será atualizado a cada segundo.

// Passos:

//  1. Defina uma função para calcular o tempo restante até uma data futura:

function calcularTempoRestante(dataFutura){
    const dataAtual = new Date();

    const dataAtualMili = dataAtual.getTime();
    const dataFuturaMili = dataFutura.getTime();

    let tempoRestante = dataFuturaMili - dataAtualMili;

    if(tempoRestante <= 0){
        console.log("Essa data já passou!")
    } else{

        // um dia tem 24 horas, uma hora tem 60 minutos, um minuto tem 60 segundos e um segundo tem 1000 ms
        const dias = Math.floor(tempoRestante / (24*60*60*1000));
        tempoRestante = tempoRestante % (24*60*60*1000);

        const horas = Math.floor(tempoRestante / (60 * 60 * 1000));
        tempoRestante = tempoRestante % (60 * 60 * 1000);
    
        const minutos = Math.floor(tempoRestante / (60 * 1000));
        tempoRestante = tempoRestante % (60 * 1000);
    
        const segundos = Math.floor(tempoRestante / 1000);
    
        return { dias, horas, minutos, segundos };
    }
}

//  2. Defina uma função para atualizar o temporizador na tela:

function atualizarTemporizador(dataFutura) {
    const tempoRestante = calcularTempoRestante(dataFutura);

    if (tempoRestante) {
        console.log('Tempo restante: ' +tempoRestante.dias+ ' dias, ' +tempoRestante.horas+ ' horas, ' +tempoRestante.minutos+ ' minutos e ' +tempoRestante.segundos+ ' segundos');
    } else {
        clearInterval(intervalId);
        console.log("O temporizador terminou!");
    }
}

//  3. Use setInterval para atualizar o temporizador a cada segundo.

//  4. Manipule o objeto Date para calcular a diferença entre a data atual e a data futura.

const dataFutura = new Date("2024-11-03T15:09:59");

const intervalId = setInterval(() => atualizarTemporizador(dataFutura), 1000);