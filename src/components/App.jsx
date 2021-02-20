import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>

            <Avatar 
                img="https://pbs.twimg.com/profile_images/744849215675838464/IH0FNIXk_400x400.jpg"
            />

            <Card
                name={contacts[0].name}
                img={contacts[0].imgUrl}
                tel={contacts[0].tel}
                email={contacts[0].email}
            />
            <Card
                name={contacts[1].name}
                img={contacts[1].imgUrl}
                tel={contacts[1].tel}
                email={contacts[1].email}
            />
            <Card
                name={contacts[2].name}
                img={contacts[2].imgUrl}
                tel={contacts[2].tel}
                email={contacts[2].email}
            />
        </div>
    );
}

export default App;