import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function GuestbookSection() {
    const tasks = useQuery(api.tasks.get);

    return (
        <section className="content-container" id="guestbook">
            <h2>Guest Book</h2>
            <p>Leave a comment or just say hello!</p>
            <div className="guestbook--content">

                <div className="guestbook--content--form">
                    <p><b>Name</b></p>
                    <input type="text" placeholder="Enter your name" />
                    <p><b>Message</b></p>
                    <textarea placeholder="Enter your message"></textarea>
                </div>

                <div className="guestbook--content--reviews">
                    <div className="guestbook--content--review">
                        <div className="guestbook--content--review--name">
                            <div className="circle"></div>
                            <b>Brian Rahadi</b>
                        </div>
                        <p className="guestbook--content--review--comment">Hey Sebastian! Nice portfolio website</p>
                        <p className="guestbook--content--review--date">Sep 1, 2024</p>
                    </div>
                    <div className="guestbook--content--review">
                        <div className="guestbook--content--review--name">
                            <div className="circle"></div>
                            <b>Brian Rahadi</b>
                        </div>
                        <p className="guestbook--content--review--comment">Hey Sebastian! Nice portfolio website</p>
                        <p className="guestbook--content--review--date">Sep 1, 2024</p>
                    </div>
                    <div className="guestbook--content--review">
                        <div className="guestbook--content--review--name">
                            <div className="circle"></div>
                            <b>Brian Rahadi</b>
                        </div>
                        <p className="guestbook--content--review--comment">Hey Sebastian! Nice portfolio website</p>
                        <p className="guestbook--content--review--date">Sep 1, 2024</p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}