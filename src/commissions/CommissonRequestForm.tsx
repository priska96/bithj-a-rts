import { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "../components/ui/Button";
import { InputField } from "../components/ui/InputField";
import { SelectField } from "../components/ui/SelectField";
import { TextArea } from "../components/ui/TextArea";

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

    const mailtoLink = `mailto:your-email@example.com?subject=Commission Request from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Commission Request Details:\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n\n` +
        `Artwork Type: ${formData.artworkType}\n` +
        `Preferred Size: ${formData.size}\n` +
        `Budget Range: ${formData.budget}\n` +
        `Timeline: ${formData.timeline}\n\n` +
        `Project Description:\n${formData.description}`
    )}`;

    window.location.href = mailtoLink;
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label="Full Name *"
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <InputField
          label="Email Address *"
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <InputField
        label="Phone Number (Optional)"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />

      {/* Artwork Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SelectField
          label="Artwork Type *"
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
          label="Preferred Size *"
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
          label="Budget Range *"
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
          label="Desired Timeline *"
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
        label="Project Description *"
        name="description"
        required
        value={formData.description}
        placeholder="Tell me about your vision... What inspires you? What emotions or themes would you like to explore? Are there any specific colors, motifs, or existing works of mine that resonate with you?"
        onChange={handleChange}
        rows={6}
      />

      <Button
        type="submit"
        variant="solidPrimary"
        className="w-full rounded-md"
      >
        Submit Commission Request
      </Button>

      <p className="text-sm text-main-text/70 text-center">
        * By submitting this form, you agree to be contacted regarding your
        commission request
      </p>
    </form>
  );
};
