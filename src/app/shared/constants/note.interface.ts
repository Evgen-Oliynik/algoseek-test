import { NoteType } from "./note-type.enum";

export interface Note {
  id: number;
  text: string;
  type: NoteType;
  createdAt: Date;
  user: string;
}