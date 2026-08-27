import { useState, useMemo } from "react";
import { makeSendContactMessage } from "../../../infrastructure/factories/contact/sendContactMessage.factory";
import { ContactMessage } from "../../../domain/entities/contact/contact.entity";

type ContactFormStatus = {
    type: "success" | "error" | "";
    message: string;
};

export const useContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [status, setStatus] = useState<ContactFormStatus>({
        type: "",
        message: "",
    });

    const sendContactMessage = useMemo(
        () => makeSendContactMessage(),
        []
    );

    const submit = async (formData: FormData) => {
        setIsSubmitting(true);

        setStatus({
            type: "",
            message: "",
        });

        try {
            const contactMessage = new ContactMessage(
                String(formData.get("nome") || ""),
                String(formData.get("email") || ""),
                String(formData.get("assunto") || ""),
                String(formData.get("mensagem") || ""),
                String(formData.get("empresa") || ""),
                String(formData.get("telefone") || "")
            );

            await sendContactMessage.execute(contactMessage);

            setStatus({
                type: "success",
                message: "Mensagem enviada com sucesso!",
            });

            return true;

        } catch (error) {
            console.error(
                "Erro ao enviar formulário:",
                error
            );

            setStatus({
                type: "error",
                message:
                    error instanceof Error
                        ? error.message
                        : "Ocorreu um erro ao enviar sua mensagem.",
            });

            return false;

        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        submit,
        isSubmitting,
        status,
    };
};