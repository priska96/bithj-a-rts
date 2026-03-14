import { useState, ChangeEvent, FormEvent } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
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
  const [status, setStatus] = useState(t("commissions.form.submit"));

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

    setStatus(t("commissions.form.sending"));
    sendEmail(CONTACT_TEMPLATE_ID, {
      name: formData.name,
      email: formData.email,
      intro: t("commissions.form.emailIntro"),
      subject: `${t("commissions.form.emailSubjectPrefix")}${formData.artworkType}`,
      message: `${t("commissions.form.message.name")}: ${formData.name}\n${t("commissions.form.message.email")}: ${formData.email}\n${t("commissions.form.message.phone")}: ${formData.phone}\n${t("commissions.form.message.artworkType")}: ${formData.artworkType}\n${t("commissions.form.message.size")}: ${formData.size}\n${t("commissions.form.message.budget")}: ${formData.budget}\n${t("commissions.form.message.timeline")}: ${formData.timeline}\n${t("commissions.form.message.description")}:\n${formData.description}`,
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
      setStatus(t("commissions.form.submit"));
    }, 2000);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label={t("commissions.form.name")}
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <InputField
          label={t("commissions.form.email")}
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <InputField
        label={t("commissions.form.phone")}
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />

      {/* Artwork Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SelectField
          label={t("commissions.form.artworkType")}
          name="artworkType"
          required
          value={formData.artworkType}
          onChange={handleChange}
          options={[
            { value: "", label: t("commissions.form.options.selectType") },
            {
              value: "abstract",
              label: t("commissions.form.options.abstract"),
            },
            {
              value: "portrait",
              label: t("commissions.form.options.portrait"),
            },
            {
              value: "landscape",
              label: t("commissions.form.options.landscape"),
            },
            {
              value: "mixed-media",
              label: t("commissions.form.options.mixedMedia"),
            },
            { value: "other", label: t("commissions.form.options.other") },
          ]}
        />
        <SelectField
          label={t("commissions.form.size")}
          name="size"
          required
          value={formData.size}
          onChange={handleChange}
          options={[
            { value: "", label: t("commissions.form.options.selectSize") },
            { value: "small", label: t("commissions.form.options.small") },
            { value: "medium", label: t("commissions.form.options.medium") },
            { value: "large", label: t("commissions.form.options.large") },
            { value: "xlarge", label: t("commissions.form.options.xlarge") },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SelectField
          label={t("commissions.form.budget")}
          name="budget"
          required
          value={formData.budget}
          onChange={handleChange}
          options={[
            { value: "", label: t("commissions.form.options.selectBudget") },
            { value: "1000-2500", label: "$1,000 - $2,500" },
            { value: "2500-5000", label: "$2,500 - $5,000" },
            { value: "5000-10000", label: "$5,000 - $10,000" },
            { value: "10000+", label: "$10,000+" },
          ]}
        />
        <SelectField
          label={t("commissions.form.timeline")}
          name="timeline"
          required
          value={formData.timeline}
          onChange={handleChange}
          options={[
            { value: "", label: t("commissions.form.options.selectTimeline") },
            {
              value: "flexible",
              label: t("commissions.form.options.flexible"),
            },
            {
              value: "4-6weeks",
              label: t("commissions.form.options.weeks4to6"),
            },
            {
              value: "6-8weeks",
              label: t("commissions.form.options.weeks6to8"),
            },
            {
              value: "2-3months",
              label: t("commissions.form.options.months2to3"),
            },
          ]}
        />
      </div>

      <TextArea
        label={t("commissions.form.description")}
        name="description"
        required
        value={formData.description}
        placeholder={t("commissions.form.descriptionPlaceholder")}
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
        {t("commissions.form.consent")}
      </p>
    </form>
  );
};
