import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
    // You can add your newsletter signup logic here
  };

  return (
    <section class="newsletter">
      <div class="newsletter-container">
        <h2>Join Our Newsletter</h2>
        <p>Stay updated with our latest news, updates, and exclusive offers.</p>
        <form class="newsletter-form" action="#" method="POST">
          <input
            type="email"
            class="newsletter-input"
            placeholder="Enter your email address"
            required
          />
          <button type="submit" class="newsletter-submit">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
