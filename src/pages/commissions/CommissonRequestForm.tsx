import { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "../../components/ui/Button";
import { InputField } from "../../components/ui/InputField";
import { SelectField } from "../../components/ui/SelectField";
import { TextArea } from "../../components/ui/TextArea";
import { sendEmail } from "../../utils/sendEmail";
import { CONTACT_TEMPLATE_ID } from "../../constants/emailJs";

interface CommissionForm {
  name: string;
  email: string;
  phone: string;
  artworkType: string;
  size: string;
  budget: string;
  timeline: string;
  description: string;
}
export const CommissionRequestForm = () => {
  const [formData, setFormData] = useState<CommissionForm>({
    name: "",
    email: "",
    phone: "",
    artworkType: "",
    size: "",
    budget: "",
    timeline: "",
    description: "",
  });
  const [status, setStatus] = useState("Anfrage für ein Kunstwerk absenden");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
      name: formData.name,
      email: formData.email,
      intro: "bithja.arts du hast eine neue Kaufanfrage erhalten.",
      subject: "Kaufanfrage:" + formData.artworkType,
      message: `Name: ${formData.name}\nEmail: ${formData.email}\nHandynr: ${formData.phone}\nKunstwerkart: ${formData.artworkType}\nGröße: ${formData.size}\nBudget: ${formData.budget}\nZeitlinie: ${formData.timeline}\nProjektbeschreibung:\n${formData.description}`,
      time: new Date().toISOString(),
    });

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        artworkType: "",
        size: "",
        budget: "",
        timeline: "",
        description: "",
      });
      setStatus("Anfrage für ein Kunstwerk absenden");
    }, 2000);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label="Vollständiger Name *"
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <InputField
          label="Email *"
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <InputField
        label="Handynummer (Optional)"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />

      {/* Artwork Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SelectField
          label="Kunstwerkart *"
          name="artworkType"
          required
          value={formData.artworkType}
          onChange={handleChange}
          options={[
            { value: "", label: "Select type..." },
            { value: "abstract", label: "Abstract" },
            { value: "portrait", label: "Portrait" },
            { value: "landscape", label: "Landscape" },
            { value: "mixed-media", label: "Mixed Media" },
            { value: "other", label: "Other" },
          ]}
        />
        <SelectField
          label="Bevorzugte Größe *"
          name="size"
          required
          value={formData.size}
          onChange={handleChange}
          options={[
            { value: "", label: "Select size..." },
            { value: "small", label: 'Small (up to 24")' },
            { value: "medium", label: 'Medium (24"-40")' },
            { value: "large", label: 'Large (40"-60")' },
            { value: "xlarge", label: 'Extra Large (60"+)' },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SelectField
          label="Budget *"
          name="budget"
          required
          value={formData.budget}
          onChange={handleChange}
          options={[
            { value: "", label: "Select budget..." },
            { value: "1000-2500", label: "$1,000 - $2,500" },
            { value: "2500-5000", label: "$2,500 - $5,000" },
            { value: "5000-10000", label: "$5,000 - $10,000" },
            { value: "10000+", label: "$10,000+" },
          ]}
        />
        <SelectField
          label="Bevorzugte Zeitlinie *"
          name="timeline"
          required
          value={formData.timeline}
          onChange={handleChange}
          options={[
            { value: "", label: "Select timeline..." },
            { value: "flexible", label: "Flexible" },
            { value: "4-6weeks", label: "4-6 weeks" },
            { value: "6-8weeks", label: "6-8 weeks" },
            { value: "2-3months", label: "2-3 months" },
          ]}
        />
      </div>

      <TextArea
        label="Projektbeschreibung *"
        name="description"
        required
        value={formData.description}
        placeholder="Erzähle mir von deiner Vision... Was inspiriert dich? Welche Emotionen oder Themen möchtest du erkunden? Gibt es bestimmte Farben, Motive oder bestehende Werke von mir, die dich ansprechen?"
        onChange={handleChange}
        rows={6}
      />

      <Button
        type="submit"
        variant="solidPrimary"
        className="w-full rounded-md"
      >
        {status}
      </Button>

      <p className="text-sm text-main-text/70 text-center">
        * Durch das Absenden dieses Formulars stimmen Sie zu, bezüglich Ihrer
        Anfrage für ein Kunstwerk kontaktiert zu werden.
      </p>
    </form>
  );
};
