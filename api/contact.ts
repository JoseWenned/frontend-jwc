import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    // ==================================================
    // MÉTODO HTTP
    // ==================================================
    console.log(
        "RESEND_API_KEY:",
        process.env.RESEND_API_KEY ? "CARREGADA" : "AUSENTE"
    );

    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Método não permitido.",
        });
    }

    // ==================================================
    // API KEY
    // ==================================================

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!contactEmail) {
        console.error("CONTACT_EMAIL não configurado.");

        return res.status(500).json({
            success: false,
            message: "Destinatário do formulário não configurado.",
        });
    }

    if (!apiKey) {
        console.error("RESEND_API_KEY não configurada.");

        return res.status(500).json({
            success: false,
            message: "Serviço de e-mail não configurado.",
        });
    }

    const resend = new Resend(apiKey);

    // ==================================================
    // DADOS DO FORMULÁRIO
    // ==================================================

    const {
        nome,
        empresa,
        email,
        telefone,
        assunto,
        mensagem,
    } = req.body;

    // ==================================================
    // VALIDAÇÃO
    // ==================================================

    if (!nome || !email || !assunto || !mensagem) {
        return res.status(400).json({
            success: false,
            message: "Preencha todos os campos obrigatórios.",
        });
    }

    // ==================================================
    // ENVIO DO E-MAIL
    // ==================================================

    try {
        const { data, error } = await resend.emails.send({
            from: "JWC Log <onboarding@resend.dev>",

            to: contactEmail,

            subject: `Nova mensagem de contato — ${assunto}`,

            html: `
                <!DOCTYPE html>

                <html lang="pt-BR">

                    <head>
                        <meta charset="UTF-8" />

                        <title>
                            Nova mensagem de contato — JWC Distribuição & Logística
                        </title>
                    </head>

                    <body
                        style="
                            margin: 0;
                            padding: 0;
                            background-color: #f4f4f4;
                            font-family: Arial, Helvetica, sans-serif;
                        "
                    >

                        <div
                            style="
                                max-width: 700px;
                                margin: 40px auto;
                                background-color: #ffffff;
                                border-radius: 12px;
                                overflow: hidden;
                            "
                        >

                            <div
                                style="
                                    padding: 30px;
                                    background-color: #111111;
                                    color: #ffffff;
                                "
                            >

                                <h1
                                    style="
                                        margin: 0;
                                        font-size: 24px;
                                    "
                                >
                                    Nova mensagem de contato
                                </h1>

                                <p
                                    style="
                                        margin: 8px 0 0;
                                        color: #cccccc;
                                    "
                                >
                                    JWC Distribuição & Logística
                                </p>

                            </div>

                            <div style="padding: 30px;">

                                <h2
                                    style="
                                        margin-top: 0;
                                        font-size: 20px;
                                        color: #222222;
                                    "
                                >
                                    Dados do contato
                                </h2>

                                <p>
                                    <strong>Nome:</strong>
                                    ${nome}
                                </p>

                                <p>
                                    <strong>Empresa:</strong>
                                    ${empresa || "Não informado"}
                                </p>

                                <p>
                                    <strong>E-mail:</strong>
                                    ${email}
                                </p>

                                <p>
                                    <strong>Telefone:</strong>
                                    ${telefone || "Não informado"}
                                </p>

                                <p>
                                    <strong>Assunto:</strong>
                                    ${assunto}
                                </p>

                                <hr
                                    style="
                                        margin: 30px 0;
                                        border: 0;
                                        border-top: 1px solid #eeeeee;
                                    "
                                />

                                <h2
                                    style="
                                        font-size: 20px;
                                        color: #222222;
                                    "
                                >
                                    Mensagem
                                </h2>

                                <div
                                    style="
                                        padding: 20px;
                                        background-color: #f7f7f7;
                                        border-radius: 8px;
                                        color: #444444;
                                        line-height: 1.6;
                                    "
                                >
                                    ${mensagem}
                                </div>

                            </div>

                            <div
                                style="
                                    padding: 20px 30px;
                                    background-color: #f7f7f7;
                                    color: #777777;
                                    font-size: 13px;
                                "
                            >

                                Este e-mail foi enviado através do
                                formulário de contato do site da
                                JWC Distribuição & Logística.

                            </div>

                        </div>

                    </body>

                </html>
            `,
        });

        // ==================================================
        // ERRO DO RESEND
        // ==================================================

        if (error) {
            console.error("Erro ao enviar e-mail:", error);

            return res.status(500).json({
                success: false,
                message: "Não foi possível enviar a mensagem.",
            });
        }

        // ==================================================
        // SUCESSO
        // ==================================================

        return res.status(200).json({
            success: true,
            message: "Mensagem enviada com sucesso.",
            id: data?.id,
        });

    } catch (error) {
        console.error(
            "Erro inesperado ao enviar formulário:",
            error
        );

        return res.status(500).json({
            success: false,
            message: "Ocorreu um erro ao enviar sua mensagem.",
        });
    }
}