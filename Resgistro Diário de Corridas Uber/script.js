function calcularSoma() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const soma1 = num1 + num2;
    document.getElementById('resultado1').value = soma1;
}

function calcularSoma2() {
    const num3 = parseFloat(document.getElementById('num3').value) || 0;
    const num4 = parseFloat(document.getElementById('num4').value) || 0;
    const soma2 = num3 + num4;
    document.getElementById('resultado2').value = soma2;
}

function calcularSoma3() {
    const num5 = parseFloat(document.getElementById('num5').value) || 0;
    const num6 = parseFloat(document.getElementById('num6').value) || 0;
    const soma3 = num5 + num6;
    document.getElementById('resultado3').value = soma3;
}
function calcularDuracao() {
    const horario1 = document.getElementById('horario1').value;
    const horario2 = document.getElementById('horario2').value;

    // Converte os horários para minutos
    const h1 = parseInt(horario1.slice(0, 2));
    const m1 = parseInt(horario1.slice(3, 5));

    const h2 = parseInt(horario2.slice(0, 2));
    const m2 = parseInt(horario2.slice(3, 5));

    const totalMinutos = (h2 - h1) * 60 + (m2 - m1);

    // Calcula as horas e minutos
    const horas = Math.floor(totalMinutos / 60);
    const minutos = totalMinutos % 60;

    const resultado = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
    document.getElementById('resultado4').value = resultado;
}

// Chama a função para calcular a duração quando os campos são preenchidos
document.getElementById('horario1').addEventListener('input', calcularDuracao);
document.getElementById('horario2').addEventListener('input', calcularDuracao);
