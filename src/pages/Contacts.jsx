import { useState } from "react";
import Layout from "../components/Layout";
import "../Contact.css"

export default function Contacts() {
    const [name, setName] = useState("")
    const [subject, setSubject] = useState("")
    const [email, setEmail] = useState("")
    const [body, setBody] = useState("")
    return (
        <Layout>
            <div className="contact__form__container">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    console.log(`
                        Name   : ${name}
                        Subject: ${subject}
                        Email  : ${email}
                        Body   : ${body}
                    `)
                    setName("")
                    setSubject("")
                    setEmail("")
                    setBody("")
                }} className="contact__form">
                    <h1>Contact Us</h1>
                    <div>
                        <label htmlFor="name">Full Name<span className="required">*</span></label>
                        <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" required />
                    </div>
                    <div>
                        <label htmlFor="subject">Subject<span className="required">*</span></label>
                        <input onChange={(e) => setSubject(e.target.value)} type="text" name="subject" id="subject" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email Address<span className="required">*</span></label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" required />
                    </div>
                    <div>
                        <label htmlFor="body">Body<span className="required">*</span></label>
                        <textarea onChange={(e) => setBody(e.target.value)} name="body" id="body" required></textarea>
                    </div>
                    <div>
                        <input className="submit" disabled={
                            !((name.length >= 3) &&
                                (subject.length >= 3) &&
                                (email.match(
                                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                )) &&
                                (body.length >= 3))
                        }
                            type="submit" value="Send Email" />
                    </div>
                </form>
            </div>
        </Layout>
    )
}