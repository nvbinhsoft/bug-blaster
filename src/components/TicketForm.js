import React, {useState} from "react";
import '../style.css';

export default function TicketForm() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('1');

    const priorityLabels = {
        1: 'Low',
        2: 'Medium',
        3: 'High'
    }

    const clearForm = () => {
        setTitle('');
        setDescription('');
        setPriority('1');
    }

    return (
        <form  className="ticket-form">
            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    className="form-input"
                    onChange={(e) => setTitle(e.target.value)}>

                </input>
            </div>
            <div>
                <label>Description</label>
                <textarea
                    type="text"
                    value={description}
                    className="form-input"
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
        </form>
    )
}