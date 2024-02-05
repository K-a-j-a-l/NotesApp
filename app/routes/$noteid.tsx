import { Link, useLoaderData } from '@remix-run/react';
import { getStoredNotes } from '~/components/data/notes';

import styles from '~/styles/noteDetails.css';

interface Note {
  id: string;
  title: string;
  content: string;
}

export default function NoteDetailPage() {
  const note = useLoaderData() as Note; 
  return (
    <main id="note-details">
        <header>
            <nav>
                <Link to="/notes">Back to All Notes</Link>
            </nav>
            <h1>{note.title}</h1>
        </header>
        <p id="note-details-content">{note.content}</p>
    </main>
  )
}

export async function loader({params}:any){
  const notes = await getStoredNotes();
  const id=params.noteid;
  const selectedNote = notes.find((note:any) => note.id === id);
  return selectedNote;
}

export function links() {
    return [{ rel: 'stylesheet', href: styles }];
  }
