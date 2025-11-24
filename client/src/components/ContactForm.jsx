import { useState, useEffect } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  // Clear feedback messages
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // ------------------------------
    // 1. Try Web3Forms
    // ------------------------------

    const web3Payload = {
      access_key: import.meta.env.VITE_WEB3FORMS_KEY,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
    };

    try {
      console.log("Submitting to Web3Forms...");
      // Mask key for security in logs, show first 4 chars if exists
      const key = import.meta.env.VITE_WEB3FORMS_KEY;
      console.log("API Key present:", !!key, key ? `(${key.slice(0, 4)}...)` : "MISSING");

      const web3Res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(web3Payload),
      });

      const result = await web3Res.json();
      console.log("Web3Forms response:", result);

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", message: "" });
        return;
      } else {
        console.error("Web3Forms error:", result);
        throw new Error("Web3Forms failed");
      }
    } catch (error) {
      console.warn("Web3Forms failed, falling back to Google Forms…", error);
    }

    // ------------------------------
    // 2. FALLBACK → Google Forms
    // ------------------------------

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLScyqN1sPMg1yuND2BRrTI0zZqD7FQAA8MtgzBJ0sQr3RcPYsg/formResponse";

    const googleData = new FormData();
    googleData.append("entry.390828390", formData.name);
    googleData.append("entry.64093339", formData.phone);
    googleData.append("entry.1753531498", formData.email);
    googleData.append("entry.1328892716", formData.message);

    try {
      await fetch(googleFormURL, {
        method: "POST",
        mode: "no-cors",
        body: googleData,
      });

      setStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      console.error("Google Form fallback failed:", err);
      setStatus("error");
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
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block mb-1 font-roboto font-medium"
        >
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
        ></textarea>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-neutral text-primary font-semibold px-6 py-2 rounded hover:bg-primary-dark hover:text-text-dark transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sender…" : "Send besked"}
      </button>

      {status === "success" && (
        <p className="text-sm text-text-dark bg-green-700/20 p-3 rounded mt-2 border border-green-700 font-roboto">
          Beskeden er sendt! Tak.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-400 bg-red-700/20 p-3 rounded mt-2 border border-red-700 font-roboto">
          Noget gik galt. Prøv igen senere.
        </p>
      )}
    </form>
  );
}

export default ContactForm;