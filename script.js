/* =========================================
   MENÚ
========================================= */

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

if (menuButton) {

    menuButton.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

}


/* =========================================
   APRENDIZAJES
========================================= */

const learningButtons =
    document.querySelectorAll(".learning-title");

learningButtons.forEach(button => {

    button.addEventListener("click", () => {

        const item = button.parentElement;

        const wasOpen = item.classList.contains("open");


        document
            .querySelectorAll(".learning-item")
            .forEach(element => {

                element.classList.remove("open");

            });


        if (!wasOpen) {

            item.classList.add("open");

        }

    });

});


/* =========================================
   CONSECUENCIAS
========================================= */

const impactButtons =
    document.querySelectorAll(".impact-item");

const impactResult =
    document.getElementById("impactResult");


const impacts = {

    1: `
        <strong>Ocultar un error</strong><br><br>

        Lo que parece una forma de evitar una consecuencia
        puede terminar afectando al equipo, al cliente o a la
        empresa.

        <br><br>

        Reconocer un error a tiempo también es responsabilidad.
    `,

    2: `
        <strong>No prepararme</strong><br><br>

        Una falta de preparación puede convertirse en errores,
        retrasos y trabajo adicional para otras personas.

        <br><br>

        Saber que todavía necesito aprender también forma parte
        de una conducta profesional.
    `,

    3: `
        <strong>No cumplir</strong><br><br>

        Cuando no cumplimos con una responsabilidad, nuestra
        decisión no afecta únicamente nuestro trabajo.

        <br><br>

        Puede afectar la confianza, el tiempo y el trabajo
        de quienes dependen de nosotros.
    `

};


impactButtons.forEach(button => {

    button.addEventListener("click", () => {

        const id = button.dataset.impact;

        impactResult.innerHTML = impacts[id];

    });

});


/* =========================================
   CONTRATACIÓN
========================================= */

const candidates =
    document.querySelectorAll(".candidate");

const hiringResult =
    document.getElementById("hiringResult");


candidates.forEach(candidate => {

    candidate.addEventListener("click", () => {

        const selected =
            candidate.dataset.candidate;


        if (selected === "a") {

            hiringResult.innerHTML = `
                <strong>Una buena preparación técnica es importante.</strong>
                <br><br>

                Pero el conocimiento por sí solo no garantiza
                responsabilidad, compromiso ni confianza.
            `;

        }


        if (selected === "b") {

            hiringResult.innerHTML = `
                <strong>La preparación puede seguir desarrollándose.</strong>
                <br><br>

                Una persona que reconoce lo que no sabe,
                cumple, aprende y asume responsabilidades
                también demuestra potencial profesional.
            `;

        }

    });

});


/* =========================================
   CERRAR MENÚ AL NAVEGAR
========================================= */

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});