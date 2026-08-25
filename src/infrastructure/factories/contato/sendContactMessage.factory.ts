import { SendContactMessage } from "../../../application/usecases/contato/sendMessageContact.usecases";
import { ContactRepositoryHttp } from "../../repositories/contato/contato.repository";


export const makeSendContactMessage = (): SendContactMessage => {
    const contactRepository = new ContactRepositoryHttp();

    return new SendContactMessage(contactRepository);
};