import React from "react";

// export default function Contact({img, name, phone,email}) {
  // destructuring the props into variables->img,name,phone,email
  
export default function Contact(props){
  // console.log(props)
    return (

        <div className="contact-card">

            {/* props->img,email,phone,name */}

            <img src={props.img} />
            <h3>{props.name}</h3>

            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{props.phone}</p>
            </div>
            
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{props.email}</p>
            </div>



            {/* <div className="info-group">
          <img src="./images/mail-icon.png" />
          <p>mr.whiskaz@catnap.meow</p>
        </div>
      </div>

      <div className="contact-card">

        <img src='/images/fluffykins.png' />
        <h3>Fluffykins</h3>

        <div className="info-group">
          <img src="./images/phone-icon.png" />
          <p>(212) 555-2345</p>
        </div>

        <div className="info-group">
          <img src="./images/mail-icon.png" />
          <p>fluff@me.com</p>
        </div>
      </div>

      <div className="contact-card">

        <img src='/images/felix.png' />
        <h3>Felix</h3>

        <div className="info-group">
          <img src="./images/phone-icon.png" />
          <p>(212) 555-4567</p>
        </div>

        <div className="info-group">
          <img src="./images/mail-icon.png" />
          <p>thecat@hotmail.com</p>
        </div>
      </div>

      <div className="contact-card">

        <img src='/images/pumpkin.png' />
        <h3>Pumpkin</h3>

        <div className="info-group">
          <img src="./images/phone-icon.png" />
          <p>(0800) CAT KING</p>
        </div>
        <div className="info-group">
          <img src="./images/mail-icon.png" />
          <p>pumpkin@scrimba.com</p>
    </div>*/}

        </div>
    )

}