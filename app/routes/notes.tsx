import { redirect } from '@remix-run/node';
import NewNote, { links as newNoteLinks } from '~/components/NewNote';
import { getStoredNotes, storeNotes } from '~/components/data/notes';
import NoteList, { links as noteListLinks } from '~/components/NoteList';
import { Link, useLoaderData } from '@remix-run/react';

export default function notes() {
    const notes = useLoaderData();
  return (
    <main>
        <NewNote/>
        <NoteList notes={notes}/>
    </main>
  )
}

export async function loader() {
    const notes = await getStoredNotes();
    return notes;
  }

export async function action({ request }:any) {
    const formData = await request.formData();
    const noteData = Object.fromEntries(formData);
    if(noteData.title.trim().length < 5){
        return {message:'Invalid Title - must be atleast 5 characters'}
    }
    const existingNotes = await getStoredNotes();
    noteData.id = new Date().toISOString();
    const updatedNotes = existingNotes.concat(noteData);
    await storeNotes(updatedNotes);
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 1000));
    return redirect('/notes');
  }

  export function links() {
    return [...newNoteLinks(), ...noteListLinks()];
  }

  export function ErrorBoundary({error}:any){
    return (
      <main className='error'>
        <h1>An Error Occurred</h1>
        <p>{error.message}</p>
        <p>Back to <Link to="/">Safety</Link></p>
      </main>
    )
  }