import { Component } from '@angular/core';
import { ServiceNotesService } from './service-notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServiceNotesService]
})
export class AppComponent {
  title = 'Note';

  note: string = '';
  searchQuery: string = '';
  notes: { text: string; color: string; visible: boolean }[] = [];
  showNotesButtonClicked: boolean = false;

  constructor(private notesService: ServiceNotesService) {}

  toggleNotes() {
    this.showNotesButtonClicked = !this.showNotesButtonClicked;

    if (this.showNotesButtonClicked) {
      this.showNotes();
    } else {
      this.hideNotes();
    }
  }

  showNotes() {
    this.notes = this.notesService.getNotes();
    this.notes.forEach(note => (note.visible = true));
  }

  hideNotes() {
    this.notes.forEach(note => (note.visible = false));
  }

  addNote() {
    const randomColor = this.getRandomColor();
    this.notes.push({ text: this.note, color: randomColor, visible: true });
    // Update the service with the new note
    this.notesService.addNote({ text: this.note, color: randomColor });
    this.note = '';
  }

  deleteNotes() {
    // Clear both the local array and the service
    this.notes = [];
    this.showNotesButtonClicked = false; // Réinitialiser l'état du bouton
    this.notesService.clearNotes();
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
    // Update the service after deleting a note
    this.notesService.deleteNote(index);
  }

  filterNotes() {
    if (this.searchQuery.trim() === '') {
      // Si la chaîne de recherche est vide, afficher toutes les notes
      this.showNotes();
    } else {
      // Filtrer les notes en fonction de la chaîne de recherche
      this.notes.forEach(note => {
        note.visible = note.text.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
