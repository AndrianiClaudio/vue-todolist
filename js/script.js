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

const todolist = new Vue ({
    el: '#container',
    data: {
        todos: [ //lista di oggetti 'todo'
            {// Ogni todo sarà un oggetto, formato da due proprietà:
                text: 'Testo todo 1',//stringa: indica il testo del todo
                // done: true//booleano: indica se il todo è stato fatto oppure no
                done: false
            },
            {
                text: 'Testo todo 2',
                done: true
            },
            {
                text: 'Testo todo 3',
                done: false
            }
        ],
        icons: {
                delete: "fas fa-times", // x per rimuovere todo dalla lista
        },
        inputs: {
            addTodo: {
                id: 'addTodo',
                type: 'text',
                placeholder: 'Inserisci un nuovo Todo',
                value: ''
            }
        },
        buttons: {
            id: 'submit',
            innerHTML: 'Aggiungi'
        }
    },
    methods: {
        checkDone(isDone) {
            return (isDone) ? 'todo done' : 'todo notDone'
        },
        deleteItem_byIndex(index) {
            this.todos.splice(index,1)
        },
        addTodo(ev) {
            ev.preventDefault();
            // console.log(this.inputs.addTodo.value);
            if (this.inputs.addTodo.value.length > 0) {
                this.todos.push({
                    text: this.inputs.addTodo.value,
                    done: false
                })
                this.inputs.addTodo.value  = '' //reset value
            }
        }
    }
})

