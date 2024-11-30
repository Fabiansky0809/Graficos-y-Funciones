function generarDatos(funcion, xInicial, xFinal, paso) {
    const xValores = [];
    const yValores = [];
    for (let x = xInicial; x <= xFinal; x += paso) {
        xValores.push(x);
        yValores.push(funcion(x));
    }
    return { x: xValores, y: yValores };
}

// Definir las funciones
const funciones = {
    lineal: x => x,
    cuadratica: x => x ** 2,
    cubica: x => x ** 3,
    senoidal: x => Math.sin(x),
    exponencial: x => Math.exp(x)
};

// Rango de valores para graficar
const rangoX = { inicio: -10, fin: 10, paso: 0.1 };

// Generar datos para cada función
const datosLineal = generarDatos(funciones.lineal, rangoX.inicio, rangoX.fin, rangoX.paso);
const datosCuadratica = generarDatos(funciones.cuadratica, rangoX.inicio, rangoX.fin, rangoX.paso);
const datosCubica = generarDatos(funciones.cubica, rangoX.inicio, rangoX.fin, rangoX.paso);
const datosSenoidal = generarDatos(funciones.senoidal, rangoX.inicio, rangoX.fin, rangoX.paso);
const datosExponencial = generarDatos(funciones.exponencial, rangoX.inicio, rangoX.fin, rangoX.paso);

// Crear gráfico con Chart.js
const ctx = document.getElementById('grafico').getContext('2d');
const grafico = new Chart(ctx, {
    type: 'line',
    data: {
        labels: datosLineal.x, // Usar los mismos x-values para todas las funciones
        datasets: [
            {
                label: 'f(x) = x',
                data: datosLineal.y,
                borderColor: '#FF5733', // Rojo anaranjado vibrante
                backgroundColor: 'rgba(255, 87, 51, 0.2)',
                borderWidth: 3,
                fill: true
            },
            {
                label: 'f(x) = x²',
                data: datosCuadratica.y,
                borderColor: '#33FF57', // Verde vibrante
                backgroundColor: 'rgba(51, 255, 87, 0.2)',
                borderWidth: 3,
                fill: true
            },
            {
                label: 'f(x) = x³',
                data: datosCubica.y,
                borderColor: '#3357FF', // Azul vibrante
                backgroundColor: 'rgba(51, 87, 255, 0.2)',
                borderWidth: 3,
                fill: true
            },
            {
                label: 'f(x) = sin(x)',
                data: datosSenoidal.y,
                borderColor: '#FF33A6', // Rosa vibrante
                backgroundColor: 'rgba(255, 51, 166, 0.2)',
                borderWidth: 3,
                fill: true
            },
            {
                label: 'f(x) = e^x',
                data: datosExponencial.y,
                borderColor: '#FFC133', // Amarillo anaranjado vibrante
                backgroundColor: 'rgba(255, 193, 51, 0.2)',
                borderWidth: 3,
                fill: true
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 18 // Tamaño más grande para la fuente de la leyenda
                    },
                    padding: 20 // Espaciado entre elementos de la leyenda
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    display: false // Ocultar valores del eje X
                },
                title: {
                    display: true,
                    text: 'X',
                    color: '#333',
                    font: {
                        size: 16
                    }
                }
            },
            y: {
                ticks: {
                    display: false // Ocultar valores del eje Y
                },
                title: {
                    display: true,
                    text: 'Y',
                    color: '#333',
                    font: {
                        size: 16
                    }
                },
                beginAtZero: true
            }
        }
    }
});



