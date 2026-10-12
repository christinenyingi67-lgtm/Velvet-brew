import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-heading">
        <p className="contact-label">WE'D LOVE TO HEAR FROM YOU</p>

        <h1>Get In Touch</h1>

        <p>
          Have a question or want to visit us?
          Send us a message. We'd love to hear from you.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Visit Our Coffee Shop</h2>

          <p>
            <strong>Address:</strong> Nairobi, Kenya
          </p>

          <p>
            <strong>Email:</strong> hello@velvetbrew.com
          </p>

          <p>
            <strong>Opening Hours:</strong>
          </p>

          <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
          <p>Saturday - Sunday: 9:00 AM - 6:00 PM</p>
        </div>

        <form className="contact-form">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            placeholder="Write your message..."
            rows="5"
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
}

export default Contact;