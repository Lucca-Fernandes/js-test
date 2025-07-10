const contagemRegressiva = (dataFutura) => {
    const agora= new Date ().getTime ()
    const diferencadeDatas = dataFutura-agora;
    const segundosdoDia = 24 * 60* 60 * 1000;
    const segundosdeumaHora = 60 * 60 * 1000;
    const segundosdeumMinuto = 60 * 1000;
    const dias = Math.floor (diferencadeDatas/segundosdoDia);
    const horas = Math.floor ((diferencadeDatas%segundosdoDia)/segundosdeumaHora);
    const minutos = Math.floor ((diferencadeDatas%segundosdeumaHora)/segundosdeumMinuto);
    const segundos= Math.floor ((diferencadeDatas%segundosdeumMinuto)/1000)
    return {
        dias,
        horas,
        minutos,
        segundos
    }
}
const atualizarTemporizador = () => {
    const dataFutura = new Date ('2024-11-30T12:00:00').getTime();
    const tempoRestante = contagemRegressiva (dataFutura);

    document.getElementById ('dias').innerText = `Dias ${tempoRestante.dias}`
    document.getElementById ('horas').innerText = `Horas ${tempoRestante.horas}`
    document.getElementById ('minutos').innerText = `Minutos ${tempoRestante.minutos}`
    document.getElementById ('segundos').innerText = `Segundos ${tempoRestante.segundos}`
}


const Intervalo = setInterval (atualizarTemporizador, 1000)


