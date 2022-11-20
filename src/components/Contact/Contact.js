import * as React from "react"
import { BsFillTelephoneFill as Phone } from "react-icons/Bs"
import Button from "../Button/Button"
import { ContactStyles } from "./ContactStyles"
import MapModule from "../MapModule/MapModule"




const Contact = () => {
  return (
    <div>
      <ContactStyles className="section">
        <div className="call">
          <h2>Call.</h2>
          <span>
            <Phone />
            (123) 456-6957
          </span>
          <p>Monday - Friday </p>
          <p>8:00 am - 5:00 pm PST</p>
        </div>
        <form name="contact" netlify>
          <h2>Write.</h2>
          <input placeholder="Your name..." type="text" name="name" />
          <input placeholder="Your email..." type="email" name="email" />
          <textarea
            placeholder="Your message..."
            name="message"
            rows="5"
          />
          <Button text="Send Message" />
        </form>
      </ContactStyles>
      <span>
        {typeof window !== "undefined" &&
          <MapModule />
        }
      </span>
    </div>
  )
}

export default Contact




