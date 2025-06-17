import SectionTitle from "../common/SectionTitle";
import ContactForm from "../contact/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 max-w-4xl mx-auto">
      <SectionTitle title="Contact" />
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Feel free to reach out if you are interested in working together or have any questions.
      </p>
      
      <ContactForm />
    </section>
  )
}
