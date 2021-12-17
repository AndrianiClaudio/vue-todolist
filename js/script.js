// Descrizione:
// Ogni todo sarà un oggetto, formato da due proprietà:
//     - text, una stringa che indica il testo del todo
//     - done, un booleano(true / false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all’interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

// MILESTONE 1
// Stampare all’interno di una lista, un item per ogni todo.

//ho bisogno di una lista... ciclare per ogni todo presente

// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
const todolist = new Vue ({
    el: '#container',
    data: {
        todos: [ //lista di oggetti 'todo'
            {// Ogni todo sarà un oggetto, formato da due proprietà:
                text: 'Testo todo 1',//stringa: indica il testo del todo
                done: 'true'//booleano: indica se il todo è stato fatto oppure no
            },
            {
                text: 'Testo todo 2',
                done: 'true'
            },
            {
                text: 'Testo todo 3',
                done: 'false'
            }
        ]
    },
    methods: {
        checkTodo() {
            console.log('in checkTodo()');
        }
    }
})