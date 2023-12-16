// service-notes.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceNotesService {
  private notes: { text: string; color: string }[] = [];

  addNote(note: { text: string; color: string }) {
    this.notes.push(note);
  }

  getNotes() {
    return JSON.parse(JSON.stringify(this.notes));
  }

  clearNotes() {
    this.notes = [];
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
  }
}
