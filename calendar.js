let contadorFretes = {
    "Azul": {
        "diario": 0,
        "mensal": 0
    },
    "Verde": {
        "diario": 0,
        "mensal": 0
    },
    "Rosa": {
        "diario": 0,
        "mensal": 0
    },
    "Amarelo": {
        "diario": 0,
        "mensal": 0
    }
};
function colorirDia() {
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');
    let td = calendar.getElementsByTagName('td')[(parseInt(days) + 1)];

    // Verificando se o dia selecionado está dentro do intervalo válido
    if (days < 1 || days > 31) {
        alert("Por favor, selecione um número de dia válido (entre 1 e 31)");
        return;
    }

    let veiculoSelecionado = document.getElementById('color').selectedOptions[0].text;
    if (contadorFretes[veiculoSelecionado]["mensal"] >= 3) {
        alert("Limite diário de fretes alcançado para o veículo " + veiculoSelecionado);
        return;
    }

    td.style.backgroundColor = color;
   
    contadorFretes[veiculoSelecionado]["mensal"]++;

    if (new Date().getMonth() !== new Date().getMonth()) {
        contadorFretes[veiculoSelecionado]["diario"] = 0;
    }
}
