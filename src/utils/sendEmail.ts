import emailjs from "emailjs-com";

export const sendEmail = (
  emailTemplate: string,
  templateParams: Record<string, any>
) => {
  emailjs
    .send("service_dgzs7qs", emailTemplate, templateParams)
    .then(() => alert("Thanks. An email was sent :)"))
    .catch((err) => console.log("Email failed:", err));
};
