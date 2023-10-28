import { useState } from "react";

const Form = ({ onSubmit }) => {
    const initialEntry = {
        album: "",
        artist: "",
        description: ""
    };

    const [entry, setEntry] = useState(initialEntry);

    const onChangeHandler = (e) => {
        setEntry({
            ...entry,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (entry.album || entry.artist) {
            onSubmit({ ...entry });
            setEntry(initialEntry);
        }
    }

    return <form onSubmit={onSubmitHandler}>

        <label htmlFor="album">Album</label>
        <input id="album" name="album" value={entry.album} onChange={onChangeHandler} />

        <label htmlFor="artist">Artist</label>
        <input id="artist" name="artist" value={entry.artist} onChange={onChangeHandler} />

        <label htmlFor="description">Description</label>
        <input id="description" name="description" value={entry.description} onChange={onChangeHandler} />

        <button type="submit">Save</button>

    </form>
}

export default Form;