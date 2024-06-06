import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { NoteService } from './core/services/note.service';
import { Note } from './shared/constants/note.interface';
import { NoteType } from './shared/constants/note-type.enum';
import { NoteComponent } from "./note/note.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, AsyncPipe, NoteComponent, ReactiveFormsModule]
})
export class AppComponent {
  title = 'algoseek-test';

  notes$: Observable<Note[]> = this.noteService.getNotes();
  notesSubscription$: Subscription;

  formGroup = new FormGroup<{text: FormControl<string>, type: FormControl<NoteType>}>({
    text: new FormControl(null, [Validators.required]),
    type: new FormControl(NoteType.note)
  })

  NoteTypes = [NoteType.note, NoteType.call, NoteType.coffee, NoteType.beer, NoteType.meeting];
  
  constructor(
    private noteService: NoteService,
  ) {}

  submitNote() {
    if (this.formGroup.valid) {
      this.noteService.createNote(this.formGroup.value);
    }
  }
}
