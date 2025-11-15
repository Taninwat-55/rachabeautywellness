import { useState, useEffect } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  useEffect(() => {
    const wakeUpServer = async () => {
      try {
        await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/ping`, {
          method: "GET",
        });
      } catch (err) {
        console.log("Wake-up ping failed (ignored):", err);
      }
    };

    wakeUpServer();
  }, []);

  // Effect to clear success/error messages after a delay
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 5000); // Message disappears after 5 seconds
      return () => clearTimeout(timer); // Clear timeout if component unmounts or status changes
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        setStatus("success"); // Set status to success
        setFormData({ name: "", phone: "", email: "", message: "" }); // Clear form
      } else {
        setStatus("error"); // Set status to error
      }
    } catch (err) {
      console.error("Submission error:", err); // Log full error for debugging
      setStatus("error"); // Set status to error
    }
  };

  return (
    <form
      className="bg-primary text-text-dark p-8 rounded-xl shadow-lg space-y-6 w-full max-w-lg"
      onSubmit={handleSubmit}
      aria-live="polite"
    >
      {/* Name */}
      <div>
        <label htmlFor="name" className="block mb-1 font-roboto font-medium">
          Navn
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border-none font-roboto text-text-light bg-neutral placeholder:text-primary/70 focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="Dit navn"
          aria-invalid={
            status === "error" && formData.name === "" ? "true" : "false"
          }
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block mb-1 font-roboto font-medium">
          Telefon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border-none font-roboto text-text-light bg-neutral placeholder:text-primary/70 focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="Dit telefonnummer"
          aria-invalid={
            status === "error" && formData.phone === "" ? "true" : "false"
          }
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block mb-1 font-roboto font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border-none font-roboto text-text-light bg-neutral placeholder:text-primary/70 focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="Din email"
          aria-invalid={
            status === "error" && formData.email === "" ? "true" : "false"
          }
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block mb-1 font-roboto font-medium">
          Besked
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border-none font-roboto text-text-light bg-neutral placeholder:text-primary/70 focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="Skriv din besked her..."
          aria-invalid={
            status === "error" && formData.message === "" ? "true" : "false"
          }
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-neutral text-primary font-semibold px-6 py-2 rounded hover:bg-primary-dark hover:text-text-dark transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={status === "loading"} // Disable button when submitting
      >
        {status === "loading" ? "Sender..." : "Send besked"}
      </button>

      {/* Feedback Messages */}
      {status === "success" && (
        <p
          className="text-sm text-text-dark bg-green-700/20 p-3 rounded mt-2 border border-green-700 font-roboto"
          role="status"
        >
          Beskeden er sendt! Tak.
        </p>
      )}
      {status === "error" && (
        <p
          className="text-sm text-red-400 bg-red-700/20 p-3 rounded mt-2 border border-red-700 font-roboto"
          role="alert"
        >
          Noget gik galt. Prøv igen senere.
        </p>
      )}
    </form>
  );
}

export default ContactForm;
