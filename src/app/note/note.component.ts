import { AfterContentInit, Component, input } from '@angular/core';

import { NoteService } from '../core/services/note.service';
import { Note } from '../shared/constants/note.interface';
import { NoteType } from '../shared/constants/note-type.enum';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss'
})
export class NoteComponent implements AfterContentInit {
  note = input.required<Note>();
  NoteType = NoteType;
  noteDate: string | undefined;

  constructor(
    private noteService: NoteService,
  ) {}

  ngAfterContentInit(): void {
    const diffDate = Math.floor((new Date().getTime() - this.note().createdAt.getTime()) / (1000 * 60 * 60 * 24));
    this.noteDate = diffDate < 1 ? 'today' : diffDate + 'd';
  }

  deleteNote(id: number) {
    if (id) {
      this.noteService.deleteNote(id);
    }
  }
}
