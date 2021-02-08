const quizData = [
    {
        domanda: "Cos'è il CSS",
        a: "Un linguaggio di stile per gli elementi HTML",
        b: "Un linguaggio HTML",
        c: "Un tipo di tag",
        corretto: "a"
    }, {
        domanda: "Cosa si intende per framework CSS",
        a: "Un linguaggio web",
        b: "Una libreria pre-pianificate, che consentono uno stile di pagina web",
        c: "Una libreria Javascript",
        corretto: "b"
    }, {
        domanda: "Come si puo modificare il colore di sfondo di un elemento",
        a: "backgroundcolor",
        b: "backgroundColor",
        c: "background-color",
        corretto: "c"
    }, {
        domanda: "è possibile aggiungere più dichiarazioni in CSS",
        a: "Si, possiamo farlo",
        b: "Non, per nessun motivo",
        c: "Solo due al massimo",
        corretto: "a"
    }, {
        domanda: "Come si possono aggiungere commenti nei CSS",
        a: "/ /",
        b: "/* */",
        c: "*/ /*",
        corretto: "b"
    }, {
        domanda: "Cos'è RWD",
        a: "React World Design",
        b: "Responsive World Design",
        c: "Responsive Web Design",
        corretto: "c"
    }, {
        domanda: "Cos'è il SCSS",
        a: "Offre variabili che consentono di abbreviare il codice",
        b: "Un framework CSS",
        c: "Un foglio di stile",
        corretto: "a"
    } 
];

const quiz = document.getElementById("quiz");
const risposteText = document.querySelectorAll(".risposta");
const domandaTitle = document.getElementById('domanda');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submitBtn = document.getElementById('submit');

let quizApi = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectRisposte();

    const datiQuiz = quizData[quizApi];

    domandaTitle.innerText = datiQuiz.domanda;
    a_text.innerText = datiQuiz.a;
    b_text.innerText = datiQuiz.b;
    c_text.innerText = datiQuiz.c;

}

function getSelected() {
    let risposta = undefined;

    risposteText.forEach((risposteText) =>{
        if (risposteText.checked) {
            risposta = risposteText.id;
        }
    });

    return risposta;
}

function deselectRisposte() {
    risposteText.forEach((risposteText) => {
        risposteText.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    
    const risposta = getSelected();
    
    if (risposta) {
        if (risposta === quizData[quizApi].corretto) {
            score++;
        }

        quizApi++;
        if (quizApi < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <div class="notification is-primary">
            <h2 class="font-score">le risposte giuste sono ${score} di ${quizData.length}</h2>
            <button class="button is-fullwidth is-link button-score" onclick="location.reload()">Ricarica</button>
            </div>
            `;
        }
    }
})
