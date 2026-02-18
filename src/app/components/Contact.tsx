import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import contactBackground from "@/app/assets/connect.jpg";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formDataToSend = new FormData();
    formDataToSend.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
    );  
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000); // Clear message after 5 seconds
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-6 py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(232, 229, 223, 0.9), rgba(232, 229, 223, 0.9)), url(${contactBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          className="text-4xl md:text-5xl mb-12 text-center"
          style={{ color: "#5a4a3a" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg" style={{ color: "#6a5a4a" }}>
              I'm always happy to connect and chat!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:stephaniechung360@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-105"
                style={{ backgroundColor: "#ffffff" }}
              >
                <Mail size={24} style={{ color: "#8ba888" }} />
                <span style={{ color: "#5a4a3a" }}>
                  stephaniechung360@gmail.com
                </span>
              </a>

              <a
                href="https://github.com/schung06"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-105"
                style={{ backgroundColor: "#ffffff" }}
              >
                <Github size={24} style={{ color: "#8ba888" }} />
                <span style={{ color: "#5a4a3a" }}>github.com/schung06</span>
              </a>

              <a
                href="https://linkedin.com/in/schung06"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-105"
                style={{ backgroundColor: "#ffffff" }}
              >
                <Linkedin size={24} style={{ color: "#8ba888" }} />
                <span style={{ color: "#5a4a3a" }}>
                  linkedin.com/in/schung06
                </span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-2"
                style={{ color: "#5a4a3a" }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 outline-none focus:border-opacity-100 transition-all"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#c9b5a0",
                  color: "#5a4a3a",
                }}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2"
                style={{ color: "#5a4a3a" }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 outline-none focus:border-opacity-100 transition-all"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#c9b5a0",
                  color: "#5a4a3a",
                }}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2"
                style={{ color: "#5a4a3a" }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl border-2 outline-none focus:border-opacity-100 transition-all resize-none"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#c9b5a0",
                  color: "#5a4a3a",
                }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || submitStatus === "success"}
              className="w-full px-6 py-3 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              style={{
                backgroundColor:
                  submitStatus === "success" ? "#6b9f68" : "#6b9f68",
                color: "#ffffff",
              }}
            >
              {isSubmitting
                ? "Sending..."
                : submitStatus === "success"
                  ? "✓ Submitted"
                  : "Send Message"}
              {submitStatus !== "success" && <Send size={18} />}
            </button>

            {/* Success/Error Messages */}
            {submitStatus === "success" && (
              <div
                className="p-4 rounded-xl text-center"
                style={{ backgroundColor: "#8ba888", color: "#ffffff" }}
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div
                className="p-4 rounded-xl text-center"
                style={{ backgroundColor: "#d4756c", color: "#ffffff" }}
              >
                ✗ Failed to send message. Please try again or email me directly.
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}