import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";

export default function GuestbookSection() {
    const tasks = useQuery(api.tasks.get);
    const addEntry = useMutation(api.myFunctions.createTask);

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();

        // Call Convex API to add a new guestbook entry
        await addEntry({ name, message });

        // Clear the form
        setName("");
        setMessage("");
    };
    console.log(tasks);

    const formatDate = (timestamp) => new Date(timestamp).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })

    return (
        <section className="content-container" id="guestbook">
            <h2>Guest Book</h2>
            <p>Leave a comment or just say hello!</p>
            <div className="guestbook--content">

                <form className="guestbook--content--form" onSubmit={submitHandler}>
                    <p><b>Name</b></p>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <p><b>Message</b></p>
                    <textarea
                        placeholder="Enter your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                    <button type="submit" className="btn">Submit</button>
                </form>

                <div className="guestbook--content--reviews">
                    {tasks && tasks.map(task => {
                        return (
                            <div className="guestbook--content--review">
                                <div className="guestbook--content--review--name">
                                    <div className="circle"></div>
                                    <b>{task.name}</b>
                                </div>
                                <p className="guestbook--content--review--comment">{task.message}</p>
                                <p className="guestbook--content--review--date">{formatDate(task._creationTime)}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}