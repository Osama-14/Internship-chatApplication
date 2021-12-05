import React,{useState} from 'react'
import { db, collection, getDocs} from "./firebase/Firebase";


const Message = () => {

    const [msg, setmsg] = useState('')


    async function sendMessage(e) {
        e.preventDefault()
    }


    return (
        <div>
            <form onSubmit={sendMessage}>
                <input value={msg} onChange={(e) => setmsg(e.target.value)} placeholder="type message"/>
                <button type="submit">Send</button>
            </form>
            
        </div>
    )
}

export default Message
