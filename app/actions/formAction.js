import { toast } from "sonner";

export const sendEmail = async (
  formRef,
  subject = "New Submission from Website",
  successMessage = "Message sent successfully!"
) => {
  try {
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    // Construct HTML content from form data
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>${subject}</h2>
        <table style="width: 100%; border-collapse: collapse;">
          ${Object.entries(data)
            .map(
              ([key, value]) => `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%; text-transform: capitalize;">${key.replace(
                /([A-Z])/g,
                " $1"
              )}</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${value}</td>
            </tr>
          `
            )
            .join("")}
        </table>
      </div>
    `;

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: subject,
        html: htmlContent,
        // to: "info@pakphire.com", // Handled by API default, or can be passed here
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to send email");
    }

    toast.success(successMessage);
    formRef.current.reset();
    return true;
  } catch (error) {
    console.error("FAILED...", error);
    toast.error("Failed to send message. Please try again.");
    return false;
  }
};
