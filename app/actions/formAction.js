import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export const sendEmail = async (
  formRef,
  templateId,
  successMessage = "Message sent successfully!"
) => {
  try {
    await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      templateId,
      formRef.current,
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      }
    );
    toast.success(successMessage);
    formRef.current.reset();
    return true;
  } catch (error) {
    console.error("FAILED...", error);
    toast.error("Failed to send message. Please try again.");
    return false;
  }
};
