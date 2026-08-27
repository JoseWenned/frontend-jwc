export class ContactMessage {
    public readonly nome: string;
    public readonly empresa?: string;
    public readonly email: string;
    public readonly telefone?: string;
    public readonly assunto: string;
    public readonly mensagem: string;

    constructor(
        nome: string,
        email: string,
        assunto: string,
        mensagem: string,
        empresa?: string,
        telefone?: string
    ) {
        if (!nome.trim()) {
            throw new Error("O nome é obrigatório.");
        }

        if (!email.trim()) {
            throw new Error("O e-mail é obrigatório.");
        }

        if (!assunto.trim()) {
            throw new Error("O assunto é obrigatório.");
        }

        if (!mensagem.trim()) {
            throw new Error("A mensagem é obrigatória.");
        }

        this.nome = nome.trim();
        this.empresa = empresa?.trim() || undefined;
        this.email = email.trim();
        this.telefone = telefone?.trim() || undefined;
        this.assunto = assunto.trim();
        this.mensagem = mensagem.trim();
    }
}