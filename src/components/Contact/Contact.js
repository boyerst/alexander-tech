import * as React from "react"
import Button from "../Button/Button"
import { ContactStyles } from "./ContactStyles"
import MapModule from "../MapModule/MapModule"



const Contact = () => {
  return (
    <div>
      <ContactStyles className="section">
        <div>
          <h2>Call.</h2>
          <p>(123) 456-6957</p>
        </div>
        <form name="contact" netlify>
          <h2>Write.</h2>
          <input placeholder="Your name..." type="text" name="name" />
          <input placeholder="Your email..." type="email" name="email" />
          <textarea
            placeholder="Your message..."
            name="message"
            rows="5"
          ></textarea>
          <Button text="Send Message" />
        </form>
      </ContactStyles>
      <span>
        {typeof window !== 'undefined' &&
          <MapModule />
        }
      </span>
    </div>
  )
}

export default Contact




