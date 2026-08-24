import { render, act } from "@testing-library/react";
import {
    MemoryRouter,
} from "react-router-dom";
import {
    afterEach,
    beforeEach,
    describe,
    expect,
    it,
    vi,
} from "vitest";

import { ScrollToTop } from "../scrollToTop/scrollToTop";


describe("ScrollToTop", () => {

    beforeEach(() => {

        vi.useFakeTimers();

        Object.defineProperty(window, "scrollTo", {
            writable: true,
            value: vi.fn(),
        });

        Element.prototype.scrollIntoView = vi.fn();

    });


    afterEach(() => {

        vi.clearAllMocks();

        vi.useRealTimers();

    });


    // ==================================================
    // ROTA SEM HASH
    // ==================================================

    it("deve rolar para o topo quando a rota não possui hash", () => {

        render(
            <MemoryRouter initialEntries={["/"]}>
                <ScrollToTop />
            </MemoryRouter>
        );

        expect(window.scrollTo).toHaveBeenCalledTimes(1);

        expect(window.scrollTo).toHaveBeenCalledWith({
            top: 0,
            left: 0,
            behavior: "instant",
        });

    });


    it("não deve criar timeout quando a rota não possui hash", () => {

        render(
            <MemoryRouter initialEntries={["/produtos"]}>
                <ScrollToTop />
            </MemoryRouter>
        );

        expect(
            vi.getTimerCount()
        ).toBe(0);

    });


    // ==================================================
    // ROTA COM HASH
    // ==================================================

    it("não deve rolar imediatamente quando a rota possui hash", () => {

        const section = document.createElement("section");

        section.id = "contato";

        document.body.appendChild(section);

        render(
            <MemoryRouter initialEntries={["/contato#contato"]}>
                <ScrollToTop />
            </MemoryRouter>
        );

        expect(
            Element.prototype.scrollIntoView
        ).not.toHaveBeenCalled();

        section.remove();

    });


    it("deve procurar a seção após o delay quando a rota possui hash", () => {

        const section = document.createElement("section");

        section.id = "contato";

        document.body.appendChild(section);

        render(
            <MemoryRouter initialEntries={["/contato#contato"]}>
                <ScrollToTop />
            </MemoryRouter>
        );

        act(() => {
            vi.advanceTimersByTime(100);
        });

        expect(
            Element.prototype.scrollIntoView
        ).toHaveBeenCalledTimes(1);

        section.remove();

    });


    it("deve chamar scrollIntoView com os parâmetros corretos", () => {

        const section = document.createElement("section");

        section.id = "produtos";

        document.body.appendChild(section);

        render(
            <MemoryRouter initialEntries={["/produtos#produtos"]}>
                <ScrollToTop />
            </MemoryRouter>
        );

        act(() => {
            vi.advanceTimersByTime(100);
        });

        expect(
            section.scrollIntoView
        ).toHaveBeenCalledWith({
            behavior: "smooth",
            block: "start",
        });

        section.remove();

    });


    // ==================================================
    // HASH INEXISTENTE
    // ==================================================

    it("não deve executar scrollIntoView quando a seção não existe", () => {

        render(
            <MemoryRouter initialEntries={["/contato#secao-inexistente"]}>
                <ScrollToTop />
            </MemoryRouter>
        );

        act(() => {
            vi.advanceTimersByTime(100);
        });

        expect(
            Element.prototype.scrollIntoView
        ).not.toHaveBeenCalled();

    });


    // ==================================================
    // CONVERSÃO DO HASH
    // ==================================================

    it("deve remover o # do hash antes de procurar o elemento", () => {

        const section = document.createElement("section");

        section.id = "sobre-nos";

        document.body.appendChild(section);

        const getElementByIdSpy = vi.spyOn(
            document,
            "getElementById"
        );

        render(
            <MemoryRouter initialEntries={["/sobre-nos#sobre-nos"]}>
                <ScrollToTop />
            </MemoryRouter>
        );

        act(() => {
            vi.advanceTimersByTime(100);
        });

        expect(
            getElementByIdSpy
        ).toHaveBeenCalledWith("sobre-nos");

        section.remove();

    });


    // ==================================================
    // LIMPEZA DO TIMEOUT
    // ==================================================

    it("deve limpar o timeout ao desmontar o componente", () => {

        const section = document.createElement("section");

        section.id = "contato";

        document.body.appendChild(section);

        const { unmount } = render(
            <MemoryRouter initialEntries={["/contato#contato"]}>
                <ScrollToTop />
            </MemoryRouter>
        );

        expect(
            vi.getTimerCount()
        ).toBe(1);

        unmount();

        expect(
            vi.getTimerCount()
        ).toBe(0);

        act(() => {
            vi.advanceTimersByTime(100);
        });

        expect(
            Element.prototype.scrollIntoView
        ).not.toHaveBeenCalled();

        section.remove();

    });


    // ==================================================
    // RETORNO DO COMPONENTE
    // ==================================================

    it("não deve renderizar nenhum elemento na tela", () => {

        const { container } = render(
            <MemoryRouter initialEntries={["/"]}>
                <ScrollToTop />
            </MemoryRouter>
        );

        expect(
            container.firstChild
        ).toBeNull();

    });


    // ==================================================
    // COMPORTAMENTO DE PATHNAME + HASH
    // ==================================================

    it("deve reagir quando a rota possui pathname e hash", () => {

        const section = document.createElement("section");

        section.id = "vantagens";

        document.body.appendChild(section);

        render(
            <MemoryRouter initialEntries={["/home#vantagens"]}>
                <ScrollToTop />
            </MemoryRouter>
        );

        act(() => {
            vi.advanceTimersByTime(100);
        });

        expect(
            section.scrollIntoView
        ).toHaveBeenCalledTimes(1);

        section.remove();

    });

});