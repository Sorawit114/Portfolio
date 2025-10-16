"use client";
import { useState, forwardRef } from "react";

const Contact = forwardRef(({ id }, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    attachment: null,
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key]) data.append(key, formData[key]);
      });

      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", attachment: null });
      } else {
        setStatus(result.error || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id={id}
      ref={ref}
      className="py-20 px-6 max-w-4xl mx-auto text-gray-100"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

      <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
        <div className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition min-w-0 break-words">
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <a
            href="mailto:sorawit.kamboonlue@gmail.com"
            className="text-purple-400 hover:underline break-all"
          >
            sorawit.kamboonlue@gmail.com
          </a>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition min-w-0 break-words">
          <h3 className="text-lg font-semibold mb-2">GitHub</h3>
          <a
            href="https://github.com/Sorawit114"
            className="text-purple-400 hover:underline break-all"
          >
            github.com/Sorawit114
          </a>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition min-w-0 break-words">
          <h3 className="text-lg font-semibold mb-2">Phone</h3>
          <p>063-1451619</p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-2xl shadow-lg space-y-4"
      >
        <p className="text-gray-400 mb-4 text-center">
          Please fill out this form to contact me. You can attach a file if
          needed, but it is optional. Thank you.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Your message"
            required
            className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Attachment</label>
          <label className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg cursor-pointer hover:bg-purple-700 transition">
            {formData.attachment ? formData.attachment.name : "Choose a file"}
            <input
              type="file"
              name="attachment"
              onChange={handleChange}
              className="hidden"
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p
            className={`mt-2 text-center ${
              status.includes("success") ? "text-green-400" : "text-red-400"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
});

Contact.displayName = "Contact";
export default Contact;
