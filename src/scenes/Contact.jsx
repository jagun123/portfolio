import React from "react";
import { contactDetails } from "./Details";

function Contact() {
  const { email, phone } = contactDetails;
  return (
    <section id="contact" className="pt-10 pb-24 ">
    <main className="container mx-auto max-width section  mt-44">
      <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        For any questions please drop a mail
      </h1>
      <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-yellow font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
        <a href={`mailto:${email}`}>{email}</a>
      </h3>
      {/* <span className="text-center text-content text-xl font-light block">or</span> */}
      <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-2 md:py-6">
        <a href={`tel:${phone}`}>{phone}</a>
      </h3>
    </main>
    </section>
  );
}

export default Contact;
