import emailjs from "emailjs-com";
import i18n from "../i18n";

export const sendEmail = (
  emailTemplate: string,
  templateParams: Record<string, any>
) => {
  emailjs
    .send("service_dgzs7qs", emailTemplate, templateParams)
    .then(() => alert(i18n.t("email.success")))
    .catch((err) => console.log(i18n.t("email.error"), err));
};
