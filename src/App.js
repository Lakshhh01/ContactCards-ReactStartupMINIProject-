import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="contacts">

      {/* paasing props->img,email,phone,name  as parameters to Contact func^ */}
      <Contact
        img='/images/mr-whiskerson.png'
        name='Mr.Whiskerson'
        phone='(212) 555-1234'
        email='mr.whiskaz@catnap.meow'
      />
      <Contact
        img="./images/fluffykins.png"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img="./images/felix.png"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img="./images/pumpkin.png"
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />

    </div>
  );
}

export default App;

/*object->person jisme key: value pairs hai=>

const person = {
    img: "./images/mr-whiskerson.png",
    name: "Mr. Whiskerson",
    phone: "(800) 555-1234",
    email: "mr.whiskaz@catnap.meow"
}

usme se "img,name,phone,email" ye keys hum yaha se contact fucntion ko 
bhej rahe hai as a parameter toh..
waha pe bi recieve karte wakt->props ke jagah pr "DESTRUCTURING" karke
{img,phone,email,name} aise recieve karne padege


   */