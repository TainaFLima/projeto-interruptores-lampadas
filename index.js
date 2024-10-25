// Definindo o estado inicial das lâmpadas (todas estão desligadas e frias)
let lampada1 = { ligada: false, quente: false };
let lampada2 = { ligada: false, quente: false };
let lampada3 = { ligada: false, quente: false };

// Simulando os interruptores
function ligarInterruptorA() {
    lampada1.ligada = true;
    lampada1.quente = true; // Deixar ligada por um tempo
}

function desligarInterruptorA() {
    lampada1.ligada = false;
}

function ligarInterruptorB() {
    lampada2.ligada = true;
}

function desligarInterruptorB() {
    lampada2.ligada = false;
}

function ligarInterruptorC() {
    lampada3.ligada = true;
}

function desligarInterruptorC() {
    lampada3.ligada = false;
}

// 1. Ligar o interruptor A e deixar ligado por um tempo
ligarInterruptorA();

// 2. Desligar o interruptor A e ligar o interruptor B
desligarInterruptorA();
ligarInterruptorB();

// 3. Verificar o estado das lâmpadas
function verificarLampadas() {
    if (lampada1.ligada) {
        console.log("A lâmpada 1 está acesa (Interruptor B controla a lâmpada 1).");
    } else if (lampada1.quente) {
        console.log("A lâmpada 1 está desligada, mas quente (Interruptor A controla a lâmpada 1).");
    } else {
        console.log("A lâmpada 1 está desligada e fria (Interruptor C controla a lâmpada 1).");
    }

    if (lampada2.ligada) {
        console.log("A lâmpada 2 está acesa (Interruptor B controla a lâmpada 2).");
    } else if (lampada2.quente) {
        console.log("A lâmpada 2 está desligada, mas quente (Interruptor A controla a lâmpada 2).");
    } else {
        console.log("A lâmpada 2 está desligada e fria (Interruptor C controla a lâmpada 2).");
    }

    if (lampada3.ligada) {
        console.log("A lâmpada 3 está acesa (Interruptor B controla a lâmpada 3).");
    } else if (lampada3.quente) {
        console.log("A lâmpada 3 está desligada, mas quente (Interruptor A controla a lâmpada 3).");
    } else {
        console.log("A lâmpada 3 está desligada e fria (Interruptor C controla a lâmpada 3).");
    }
}

// Verifica qual interruptor controla qual lâmpada
verificarLampadas();
