import { useState, useEffect } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  // Clear feedback messages
  useEffect(() => {
    // Only auto-clear error messages. Let success stay until explicitly closed.
    if (status === "error") {
      const timer = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const closeModal = () => setStatus(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Sanitise inputs
    const trimmed = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      date: formData.date,
      time: formData.time,
      message: formData.message.trim(),
    };

    // ------------------------------
    // 1. Try Web3Forms
    // ------------------------------

    const web3Payload = {
      access_key: import.meta.env.VITE_WEB3FORMS_KEY,
      subject: `Ny booking forespørgsel fra ${trimmed.name}`,
      from_name: "Racha Spa&Wellness",
      botcheck: "",
      replyto: trimmed.email,
      name: trimmed.name,
      phone: trimmed.phone,
      email: trimmed.email,
      date: trimmed.date,
      time: trimmed.time,
      message: trimmed.message,
    };

    try {
      const web3Res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(web3Payload),
      });

      const result = await web3Res.json();
      console.log("Web3Forms response:", result);

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", time: "", message: "", date: "" });
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
    googleData.append("entry.390828390", trimmed.name);
    googleData.append("entry.64093339", trimmed.phone);
    googleData.append("entry.1753531498", trimmed.email);
    googleData.append("entry.1328892716", trimmed.message);

    try {
      await fetch(googleFormURL, {
        method: "POST",
        mode: "no-cors",
        body: googleData,
      });

      setStatus("success");
      setFormData({ name: "", phone: "", email: "", time: "", message: "", date: "" });
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
      {/* Honeypot field — hidden from humans, bots auto-fill it */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
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

      {/* Preferred Date */}
      <div>
        <label htmlFor="date" className="block mb-1 font-roboto font-medium">
          Ønsket dato
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border-none font-roboto text-text-light bg-neutral focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      {/* Preferred Time */}
      <div>
        <label htmlFor="time" className="block mb-1 font-roboto font-medium">
          Ønsket tid
        </label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border-none font-roboto text-text-light bg-neutral focus:outline-none focus:ring-2 focus:ring-accent"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-neutral p-6 rounded-xl shadow-2xl max-w-md w-full border border-primary/20 space-y-5 animate-in fade-in zoom-in duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-200">
                <span className="text-3xl" aria-hidden="true">✅</span>
              </div>
              <h3 className="text-xl font-lora font-bold text-primary mb-2">
                Tak for din besked!
              </h3>
              <p className="font-roboto text-text-light/90">
                Vi vender tilbage til dig hurtigst muligt.
              </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 text-left">
              <p className="text-sm font-roboto text-amber-900 leading-relaxed">
                📧 <strong>Bemærk:</strong> Vores svar kan havne i din spam- eller
                junkmailmappe. Tjek venligst denne mappe, hvis du ikke modtager svar
                inden for 24 timer.
              </p>
              <p className="text-xs font-roboto italic text-amber-800 mt-2">
                Please also check your spam/junk folder if you do not receive a
                reply within 24 hours.
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={closeModal}
                className="w-full bg-primary text-text-dark font-semibold px-6 py-3 rounded hover:bg-primary-dark transition duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                Forstået
              </button>
            </div>
          </div>
        </div>
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