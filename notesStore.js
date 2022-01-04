class NotesStore {
    constructor() {
        this.notes = [];
    }

    addNote(state, name) {
        if (name == '') {
            throw new Error('Name cannot be empty');
        }
        if (state != 'completed' && state != 'active' && state != 'others') {
            throw new Error(`Invalid state ${state}`);
        }

        this.notes.push({ state, name });

    }

    getNotes(state) {
        if (state != 'completed' && state != 'active' && state != 'others') {
            throw new Error(`Invalid state ${state}`);
        }
        const result = this.notes.filter(x => x.state == state).map(obj => obj.name);
        return result.join(',');

    }
};

const notesStore = new NotesStore();
notesStore.addNote('active', 'drinkTea');
// notesStore.addNote('active', 'drinkCoffee');
notesStore.addNote('completed', 'Study');
console.log(notesStore.getNotes('active'));
