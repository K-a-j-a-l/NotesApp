import { Form, useActionData, useNavigation } from '@remix-run/react';
import styles from './NewNote.css';

export default function NewNote() {
    const navigation=useNavigation();
    const isSubmitting=navigation.state==='submitting';
    const data = useActionData<{ message?: string }>();
  return (
    <div>
        <Form method='post' id="note-form">
            {data?.message && <p style={{color:"red"}}>{data.message}</p>}
            <p>
                <label htmlFor='title'>Title</label>
                <input type='text' id="title" name='title' placeholder='Create Note!' required/> 
            </p>
            <p>
                <label htmlFor='content'>Content</label>
                <textarea id="content" name="content" rows={5} required />
            </p>
            <div className='form-actions'>
                <button disabled={isSubmitting}>{isSubmitting?"Adding...":"Add Note"}</button>
            </div>
        </Form>
    </div>
  )
}

export function links() {
    return [{ rel: 'stylesheet', href: styles }];
  }
