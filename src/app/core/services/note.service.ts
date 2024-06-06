import { Injectable } from "@angular/core";
import { Observable, map, of } from "rxjs";

import { NoteType } from "../../shared/constants/note-type.enum";
import { Note } from "../../shared/constants/note.interface";

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  getNotes(): Observable<Note[]> {
    // return mock data, should be get request
    return of([
      {
        id: 1,
        text: 'test text note 1',
        type: NoteType.call,
        createdAt: new Date('2024-06-01T20:13:51.164Z'),
        user: 'Test User'
      },
      {
        id: 2,
        text: 'test text note 2',
        type: NoteType.beer,
        createdAt: new Date('2024-06-02T20:13:51.164Z'),
        user: 'Test User'
      },
      {
        id: 3,
        text: 'test text note 3',
        type: NoteType.note,
        createdAt: new Date('2024-06-04T20:13:51.164Z'),
        user: 'Test User'
      },
    ]).pipe(
      map(data => {
        return data.sort((noteA, noteB) => noteB.createdAt.getTime() - noteA.createdAt.getTime());
      })
    );
  }

  createNote(input: any) {
    // post request to create a note
  }

  deleteNote(id: number) {
    // post request to delete note
  }
}