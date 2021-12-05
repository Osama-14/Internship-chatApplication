import React, { useState, useEffect } from "react";
import { db, collection, getDocs} from "../firebase/Firebase";
import Message from "../Message";
import SignOut from "../signout/SignOut";0

function Home({post}) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    getData();
  });

  const getData = async () => {
    const subColRef = await collection(db, "teams");
    const qSnap = await getDocs(subColRef);
    qSnap.docs.map(d => setMessages([d.data(), ...messages]))
  };


console.log(messages)
  return (
    <div>
      <SignOut />
      <Message/>

      {messages.map(({ id, text}) => {
        <div key={id}>
          <p>{text}</p>
        </div>;
      })}

    </div>
  );
}

export default Home;
