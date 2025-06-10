//Sebastian Luciardi (274754);Santiago Sampo (322388)

let preguntas = [
    {
        texto: "¿Cuál es la capital de Francia?",
        respuestaCorrecta: "París",
        respuestasIncorrectas: ["Londres", "Berlín", "Madrid"],
        nivel: 1,
        tema: {
            nombre: "Geografía",
            descripcion: "Temas de geografía del mundo"
        }
    },

    {
        texto: "¿Cuál río es más largo",
        respuestaCorrecta: "Amazonas",
        respuestasIncorrectas: ["Uruguay", "Rin", "Misisipi"],
        nivel: 4,
        tema: {
            nombre: "Geografía",
            descripcion: "Temas de geografía del mundo"
        }
    },

    {
        texto: "¿Cuánto es 5 + 7?",
        respuestaCorrecta: "12",
        respuestasIncorrectas: ["10", "8", "15", "20"],
        nivel: 1,
        tema: {
            nombre: "Matemáticas",
            descripcion: "Operaciones básicas"
        }
    },
    {
        texto: "¿Cuánto es 3 - 2?",
        respuestaCorrecta: "1",
        respuestasIncorrectas: ["5", "2", "0", "4"],
        nivel: 1,
        tema: {
            nombre: "Matemáticas",
            descripcion: "Operaciones básicas"
        }
    },
    {
        texto: "¿Cuánto es 8 + 4?",
        respuestaCorrecta: "12",
        respuestasIncorrectas: ["10", "14", "6", "16"],
        nivel: 1,
        tema: {
            nombre: "Matemáticas",
            descripcion: "Operaciones básicas"
        }
    },
    {
        texto: "¿Cuánto es 6 - 3?",
        respuestaCorrecta: "3",
        respuestasIncorrectas: ["9", "2", "5", "0"],
        nivel: 1,
        tema: {
            nombre: "Matemáticas",
            descripcion: "Operaciones básicas"
        }
    },
    {
        texto: "¿Cuánto es 9 + 2?",
        respuestaCorrecta: "11",
        respuestasIncorrectas: ["13", "8", "15", "10"],
        nivel: 1,
        tema: {
            nombre: "Matemáticas",
            descripcion: "Operaciones básicas"
        }
    },
    {
        texto: "¿Cuánto es 4 - 1?",
        respuestaCorrecta: "3",
        respuestasIncorrectas: ["5", "2", "0", "4"],
        nivel: 1,
        tema: {
            nombre: "Matemáticas",
            descripcion: "Operaciones básicas"
        }
    },
    {
        texto: "¿Cuánto es 7 + 6?",
        respuestaCorrecta: "13",
        respuestasIncorrectas: ["10", "14", "8", "16"],
        nivel: 1,
        tema: {
            nombre: "Matemáticas",
            descripcion: "Operaciones básicas"
        }
    },
    {
        texto: "¿Cuánto es 10 - 5?",
        respuestaCorrecta: "5",
        respuestasIncorrectas: ["9", "2", "7", "3"],
        nivel: 1,
        tema: {
            nombre: "Matemáticas",
            descripcion: "Operaciones básicas"
        }
    },
    {
        texto: "¿Cuánto es 3 + 4?",
        respuestaCorrecta: "7",
        respuestasIncorrectas: ["10", "5", "8", "6"],
        nivel: 1,
        tema: {
            nombre: "Matemáticas",
            descripcion: "Operaciones básicas"
        }
    },
    {
        texto: "¿Cuánto es 6 - 1?",
        respuestaCorrecta: "5",
        respuestasIncorrectas: ["9", "2", "7", "3"],
        nivel: 1,
        tema: {
            nombre: "Matemáticas",
            descripcion: "Operaciones básicas"
        }
    },

 
    {
        texto: "¿Cuánto es 15 + 8?",
        respuestaCorrecta: "23",
        respuestasIncorrectas: ["18", "25", "12", "20"],
        nivel: 2,
        tema: {
            nombre: "Matemáticas",
            descripcion: "Operaciones básicas"
        }
    },
    {
        texto: "¿Cuánto es 10 - 4?",
        respuestaCorrecta: "6",
        respuestasIncorrectas: ["14", "7", "2", "9"],
        nivel: 2,
        tema: {
            nombre: "Matemáticas",
            descripcion: "Operaciones básicas"
        }
    },
    {
        texto: "¿Cuánto es 24 + 9?",
        respuestaCorrecta: "33",
        respuestasIncorrectas: ["27", "15", "18", "30"],
        nivel: 3,
        tema: {
            nombre: "Matemáticas",
            descripcion: "Operaciones básicas"
        }
    },
    {
        texto: "¿Cuánto es 14 - 7?",
        respuestaCorrecta: "7",
        respuestasIncorrectas: ["9", "2", "5", "10"],
        nivel: 2,
        tema: {
            nombre: "Matemáticas",
            descripcion: "Operaciones básicas"
        }
    },
    {
        texto: "¿En qué año fue el descubrimiento de América?",
        respuestaCorrecta: "1492",
        respuestasIncorrectas: ["1292", "1500", "1600", "1700"],
        nivel: 4,
        tema: {
            nombre: "Historia",
            descripcion: "Historia mundial"
        }
    },
    {
        texto: "¿Cuánto es 19 + 12?",
        respuestaCorrecta: "31",
        respuestasIncorrectas: ["28", "15", "22", "25"],
        nivel: 3,
        tema: {
            nombre: "Matemáticas",
            descripcion: "Operaciones básicas"
        }


        
    },
    {
        texto: "¿Cuánto es 18 - 6?",
        respuestaCorrecta: "12",
        respuestasIncorrectas: ["14", "9", "15", "10"],
        nivel: 2,
        tema: {
            nombre: "Matemáticas",
            descripcion: "Operaciones básicas"
        }
    },
    {
        texto: "¿Cuánto es 32 + 17?",
        respuestaCorrecta: "49",
        respuestasIncorrectas: ["45", "25", "38", "50"],
        nivel: 4,
        tema: {
            nombre: "Matemáticas",
            descripcion: "Operaciones básicas"
        }
    },
    {
        texto: "¿Cuánto es 21 - 9?",
        respuestaCorrecta: "12",
        respuestasIncorrectas: ["14", "18", "15", "10"],
        nivel: 2,
        tema: {
            nombre: "Matemáticas",
            descripcion: "Operaciones básicas"
        }
    },
    {
        texto: "¿Cuánto es 121 - 11?",
        respuestaCorrecta: "110",
        respuestasIncorrectas: ["111", "109", "15", "210"],
        nivel: 4,
        tema: {
            nombre: "Matemáticas",
            descripcion: "Operaciones básicas"
        }
    },

    {
        texto: "¿Cuál es la montaña más alta del mundo?",
        respuestaCorrecta: "Monte Everest",
        respuestasIncorrectas: ["Monte Kilimanjaro", "Monte McKinley", "Monte Aconcagua"],
        nivel: 5,
        tema: {
            nombre: "Geografía",
            descripcion: "Temas de geografía del mundo"
        }
    },
    {
        texto: "¿En qué año comenzó la Primera Guerra Mundial?",
        respuestaCorrecta: "1914",
        respuestasIncorrectas: ["1900", "1920", "1939", "1950"],
        nivel: 5,
        tema: {
            nombre: "Historia",
            descripcion: "Historia mundial"
        }
    },

    {
        texto: "¿En qué continente se encuentra Egipto?",
        respuestaCorrecta: "África",
        respuestasIncorrectas: ["Asia", "Europa", "Oceanía", "América"],
        nivel: 2,
        tema: {
            nombre: "Geografía",
            descripcion: "Temas de geografía del mundo"
        }
    },

    {
        texto: "¿Cuál es la capital de España?",
        respuestaCorrecta: "Madrid",
        respuestasIncorrectas: ["Barcelona", "Lisboa", "Roma", "Atenas", "París", "Berlín"],
        nivel: 1,
        tema: {
            nombre: "Geografía",
            descripcion: "Temas de geografía del mundo"
        }
    },

    {
        texto: "¿Cuál es el deporte más popular en todo el mundo?",
        respuestaCorrecta: "Fútbol",
        respuestasIncorrectas: ["Baloncesto", "Tenis", "Cricket", "Golf"],
        nivel: 1,
        tema: {
            nombre: "Deporte",
            descripcion: "Deportes en general"
        }
    },

    {
        texto: "¿Cuál es el plural de 'análisis'?",
        respuestaCorrecta: "Análisis",
        respuestasIncorrectas: ["Análisises", "Análisi", "Análisos", "Anális"],
        nivel: 3,
        tema: {
            nombre: "Lenguaje",
            descripcion: "Lingüística y gramática"
        }
    },

    {
        texto: "¿Cuántos jugadores hay en un equipo de voleibol?",
        respuestaCorrecta: "6",
        respuestasIncorrectas: ["5", "7", "8", "9"],
        nivel: 1,
        tema: {
            nombre: "Deporte",
            descripcion: "Deportes en general"
        }
    },
    {
        texto: "¿Cuál es el evento deportivo más grande del mundo?",
        respuestaCorrecta: "Juegos Olímpicos",
        respuestasIncorrectas: ["Copa del Mundo de Fútbol", "Super Bowl", "UEFA Champions League", "Copa Mundial de Rugby"],
        nivel: 2,
        tema: {
            nombre: "Deporte",
            descripcion: "Deportes en general"
        }
    },

    {
        texto: "¿Quién pintó La Última Cena?",
        respuestaCorrecta: "Leonardo da Vinci",
        respuestasIncorrectas: ["Vincent van Gogh", "Pablo Picasso", "Michelangelo", "Claude Monet"],
        nivel: 3,
        tema: {
            nombre: "Arte",
            descripcion: "Cine, teatro, pintura, etc"
        }
    },

    {
        texto: "¿Quién escribió la obra de teatro Romeo y Julieta?",
        respuestaCorrecta: "William Shakespeare",
        respuestasIncorrectas: ["Anton Chekhov", "George Bernard Shaw", "Oscar Wilde", "Jane Austen"],
        nivel: 4,
        tema: {
            nombre: "Arte",
            descripcion: "Cine, teatro, pintura, etc"
        }
    },
    {
        texto: "¿Cuál escultura es de Miguel Ángel?",
        respuestaCorrecta: "David",
        respuestasIncorrectas: ["El Pensador", "Venus de Milo", "Toro de Wall Street"],
        nivel: 3,
        tema: {
            nombre: "Arte",
            descripcion: "Cine, teatro, pintura, etc"
        }
    },
    {
        texto: "¿Cuál es la capital de Argentina?",
        respuestaCorrecta: "Buenos Aires",
        respuestasIncorrectas: ["Salta", "Montevideo", "La Paz", "Córdoba", "Punta del Este"],
        nivel: 3,
        tema: {
            nombre: "Geografía",
            descripcion: "Temas de geografía del mundo"
        }
    },

    {
        texto: "¿Cuál es el instrumento musical más grande de la familia de las cuerdas?",
        respuestaCorrecta: "Contrabajo",
        respuestasIncorrectas: ["Violín", "Cello", "Guitarra"],
        nivel: 2,
        tema: {
            nombre: "Arte",
            descripcion: "Cine, teatro, pintura, etc"
        }
    },


    {
        texto: "¿Qué científico propuso la teoría de la relatividad?",
        respuestaCorrecta: "Albert Einstein",
        respuestasIncorrectas: ["Isaac Newton", "Galileo Galilei", "Niels Bohr", "Stephen Hawking"],
        nivel: 4,
        tema: {
            nombre: "Ciencia",
            descripcion: "Ciencia y Naturaleza"
        }
    },
    {
        texto: "¿Cuál es la capa más externa de la atmósfera terrestre?",
        respuestaCorrecta: "Exosfera",
        respuestasIncorrectas: ["Troposfera", "Estratosfera", "Mesosfera", "Termosfera"],
        nivel: 3,
        tema: {
            nombre: "Ciencia",
            descripcion: "Ciencia y Naturaleza"
        }
    },

    {
        texto: "¿Qué proceso convierte la luz solar en energía química en las plantas?",
        respuestaCorrecta: "Fotosíntesis",
        respuestasIncorrectas: ["Respiración", "Metabolismo", "Digestión", "Fermentación"],
        nivel: 3,
        tema: {
            nombre: "Ciencia",
            descripcion: "Ciencia y Naturaleza"
        }
    },
    {
        texto: "¿En qué país se originó el judo?",
        respuestaCorrecta: "Japón",
        respuestasIncorrectas: ["China", "Corea del Sur", "Rusia", "Brasil"],
        nivel: 4,
        tema: {
            nombre: "Deporte",
            descripcion: "Deportes en general"
        }
    },
    {
        texto: "¿Cuál es la partícula subatómica con carga positiva?",
        respuestaCorrecta: "Protón",
        respuestasIncorrectas: ["Electrón", "Neutrón", "Quark", "Bosón"],
        nivel: 2,
        tema: {
            nombre: "Ciencia",
            descripcion: "Ciencia y Naturaleza"
        }
    },
    {
        texto: "¿Qué fenómeno natural es medido por la escala Richter?",
        respuestaCorrecta: "Terremoto",
        respuestasIncorrectas: ["Tornado", "Huracán", "Inundación", "Erupción volcánica", "Tsunami"],
        nivel: 1,
        tema: {
            nombre: "Ciencia",
            descripcion: "Ciencia y Naturaleza"
        }
    },

    {
        texto: "¿En qué año se llevó a cabo el primer viaje tripulado a la Luna?",
        respuestaCorrecta: "1969",
        respuestasIncorrectas: ["1950", "1956", "1971", "1975", "1983", "1991"],
        nivel: 4,
        tema: {
            nombre: "Ciencia",
            descripcion: "Ciencia y Naturaleza"
        }
    },
    {
        texto: "¿Qué elemento químico tiene el símbolo 'H'?",
        respuestaCorrecta: "Hidrógeno",
        respuestasIncorrectas: ["Helio", "Oxígeno", "Nitrógeno", "Carbono", "Oro", "Plata"],
        nivel: 2,
        tema: {
            nombre: "Ciencia",
            descripcion: "Ciencia y Naturaleza"
        }
    },
    {
        texto: "¿Cuál es el satélite natural de la Tierra?",
        respuestaCorrecta: "Luna",
        respuestasIncorrectas: ["Marte", "Júpiter", "Venus", "Saturno"],
        nivel: 3,
        tema: {
            nombre: "Ciencia",
            descripcion: "Ciencia y Naturaleza"
        }
    },
    {
        texto: "¿Cuál es la forma que tienen las estrellas al mirarlas desde la Tierra?",
        respuestaCorrecta: "Redonda",
        respuestasIncorrectas: ["Cuadrada", "Triangular", "Alargada", "Rectangular"],
        nivel: 4,
        tema: {
            nombre: "Ciencia",
            descripcion: "Ciencia y Naturaleza"
        }
    },


    {
        texto: "¿Cuál es el hueso más largo del cuerpo humano?",
        respuestaCorrecta: "Fémur",
        respuestasIncorrectas: ["Tibia", "Húmero", "Radio"],
        nivel: 3,
        tema: {
            nombre: "Ciencia",
            descripcion: "Ciencia y Naturaleza"
        }
    },


    {
        texto: "¿Cuál es el sinónimo de 'efervescente'?",
        respuestaCorrecta: "Burbujeante",
        respuestasIncorrectas: ["Calmo", "Agitado", "Ferviente", "Vibrante"],
        nivel: 3,
        tema: {
            nombre: "Lenguaje",
            descripcion: "Lingüística y gramática"
        }
    },

    {
        texto: "¿Cuál es la lengua oficial de Brasil?",
        respuestaCorrecta: "Portugués",
        respuestasIncorrectas: ["Español", "Inglés", "Francés", "Italiano"],
        nivel: 1,
        tema: {
            nombre: "Lenguaje",
            descripcion: "Lingüística y gramática"
        }
    },


    {
        texto: "¿Cuál es el antónimo de 'optimista'?",
        respuestaCorrecta: "Pesimista",
        respuestasIncorrectas: ["Alegre", "Contento", "Esperanzado", "Positivo", "Feliz"],
        nivel: 1,
        tema: {
            nombre: "Lenguaje",
            descripcion: "Lingüística y gramática"
        }
    },
    {
        texto: "¿Cuál es la función principal de los adjetivos en una oración?",
        respuestaCorrecta: "Describir sustantivos",
        respuestasIncorrectas: ["Expresar acciones", "Conectar oraciones", "Indicar tiempo", "Definir verbos"],
        nivel: 3,
        tema: {
            nombre: "Lenguaje",
            descripcion: "Lingüística y gramática"
        }
    },
    {
        texto: "¿Qué es un palíndromo?",
        respuestaCorrecta: "Una palabra que se lee igual al derecho y al revés",
        respuestasIncorrectas: ["Un anagrama", "Una rima", "Un acrónimo", "Un número que se lee igual al derecho y al revés"],
        nivel: 4,
        tema: {
            nombre: "Lenguaje",
            descripcion: "Lingüística y gramática"
        }
    },

    {
        texto: "¿Cuál es la cadena montañosa más larga del mundo?",
        respuestaCorrecta: "Los Andes",
        respuestasIncorrectas: ["Los Himalayas", "Los Alpes", "Los Apalaches", "Los Urales"],
        nivel: 5,
        tema: {
            nombre: "Geografía",
            descripcion: "Temas de geografía del mundo"
        }
    },

    {
        texto: "¿Cuál es el plural de 'hipótesis'?",
        respuestaCorrecta: "Hipótesis",
        respuestasIncorrectas: ["Hipótesises", "Hipótesi", "Hipótesisos", "Hipótesi"],
        nivel: 3,
        tema: {
            nombre: "Lenguaje",
            descripcion: "Lingüística y gramática"
        }
    }
];