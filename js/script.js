Vue.config.devtools = true;

/*
Rifare l’esercizio della to do list come fatto assieme in classe:
- stampare in pagina un item per ogni elemento contenuto in un array
- ogni item ha una “x” associata: cliccando su di essa, l’item viene rimosso dalla lista
- predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
*/

new Vue(
    {
        el: '#app',

        // -----------------------------
        data: {
            toDoList: [
                {
                    text: 'Fare l\'esercizio',
                    tickClass: 'far fa-circle',
                },
                {
                    text: 'Pushare spesso',
                    tickClass: 'far fa-circle',
                },
                {
                    text: 'Aprire Hotwell',
                    tickClass: 'far fa-circle',
                },

            ],
            newTask: '',
        },

        // -----------------------------
        methods: {
            addTask: function () {
                if (this.newTask !== '') {
                    this.toDoList.push({
                        text: this.newTask,
                        tickClass: 'far fa-circle'
                    })
                    this.newTask = '';
                }
            },
            removeTask: function (index) {
                this.toDoList.splice(index, 1)
            },
            tick: function (index) {
                if (this.toDoList[index].tickClass === 'far fa-circle') {
                    this.toDoList[index].tickClass = 'far fa-check-circle green';
                } else {
                    this.toDoList[index].tickClass = 'far fa-circle';
                }
            },
        }
    }
)