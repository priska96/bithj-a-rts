import { useState, ChangeEvent, FormEvent, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
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

interface ContactFormProps {
  initialSubject?: string;
  initialMessage?: string;
}

export const ContactForm = ({
  initialSubject = "",
  initialMessage = "",
}: ContactFormProps) => {
  const { t } = useTranslation();
  const previousInitialSubject = useRef(initialSubject);
  const previousInitialMessage = useRef(initialMessage);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: initialSubject,
    message: initialMessage,
  });
  const [status, setStatus] = useState(t("contact.form.submit"));

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      subject:
        prev.subject === previousInitialSubject.current
          ? initialSubject
          : prev.subject,
      message:
        prev.message === previousInitialMessage.current
          ? initialMessage
          : prev.message,
    }));

    previousInitialSubject.current = initialSubject;
    previousInitialMessage.current = initialMessage;
  }, [initialSubject, initialMessage]);

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
    setStatus(t("contact.form.sending"));
    sendEmail(CONTACT_TEMPLATE_ID, {
      ...formData,
      intro: t("contact.form.emailIntro"),
      subject: `${t("contact.form.emailSubjectPrefix")}${formData.subject}`,
      time: new Date().toISOString(),
    });

    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setStatus(t("contact.form.submit"));
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <InputField
          label={t("contact.form.name")}
          value={formData.name}
          onChange={handleChange}
          name="name"
          required
        />

        <InputField
          label={t("contact.form.email")}
          value={formData.email}
          onChange={handleChange}
          name="email"
          required
        />
      </div>

      <InputField
        label={t("contact.form.subject")}
        value={formData.subject}
        onChange={handleChange}
        name="subject"
        required
      />

      <TextArea
        label={t("contact.form.message")}
        value={formData.message}
        onChange={handleChange}
        name="message"
        required
        placeholder={t("contact.form.placeholder")}
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
