import config from '../config';

export default function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to contact us at:</p>
      <p>Phone: {config.phone}</p>  {/* Use config variable */}
      <p>Email: {config.email}</p>  {/* Use config variable */}
    </div>
  );
}
