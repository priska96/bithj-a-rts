import { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "../../components/ui/Button";
import { InputField } from "../../components/ui/InputField";
import { TextArea } from "../../components/ui/TextArea";
import { sendEmail } from "../../utils/sendEmail";
import { CONTACT_TEMPLATE_ID } from "../../constants/emailJs";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("Abschicken");

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
    setStatus("Versende Nachricht...");
    sendEmail(CONTACT_TEMPLATE_ID, {
      ...formData,
      intro: "bithja.arts du hast eine neue Kontaktanfrage erhalten.",
      subject: "Allgemeine Kontaktanfrage:" + formData.subject,
      time: new Date().toISOString(),
    });

    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setStatus("Abschicken");
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
        label="Betreff *"
        value={formData.subject}
        onChange={handleChange}
        name="subject"
        required
      />

      <TextArea
        label="Nachricht *"
        value={formData.message}
        onChange={handleChange}
        name="message"
        required
        placeholder="Stelle mir jede Frage, die du möchtest..."
      />

      <div>
        <Button
          type="submit"
          variant="solidPrimary"
          className="w-full rounded-md"
        >
          {status}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
