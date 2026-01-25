import { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "../components/ui/Button";
import { InputField } from "../components/ui/InputField";
import { TextArea } from "../components/ui/TextArea";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormProps {
  mailto?: string;
}

export const ContactForm = ({
  mailto = "your-email@example.com",
}: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mailtoLink = `mailto:${mailto}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setStatus("Opening your email client...");
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setStatus("");
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <InputField
          label="Name *"
          value={formData.name}
          onChange={handleChange}
          name="name"
          required
        />

        <InputField
          label="Email *"
          value={formData.email}
          onChange={handleChange}
          name="email"
          required
        />
      </div>

      <InputField
        label="Subject *"
        value={formData.subject}
        onChange={handleChange}
        name="subject"
        required
      />

      <TextArea
        label="Message *"
        value={formData.message}
        onChange={handleChange}
        name="message"
        required
        placeholder="Ask me anything you want..."
      />

      <div>
        <Button
          type="submit"
          variant="solidPrimary"
          className="w-full rounded-md"
        >
          Send Message
        </Button>
      </div>

      {status && <p className="text-center text-sm text-green-600">{status}</p>}
    </form>
  );
};

export default ContactForm;
