import "./buttonSaibaMais.style.scss";
import iconArrow from "../../../../assets/images/icons/icon-set-right.svg";
import iconArrowCircle from "../../../../assets/images/icons/icon-seta-com-circulo.svg";

interface ButtonSaibaMaisProps {
    text?: string;
    onClick?: () => void;
    className?: string;
}

export const ButtonSaibaMais = ({
    text = "Saiba mais",
    onClick,
    className = "",
}: ButtonSaibaMaisProps) => {
    return (
        <button
            onClick={onClick}
            className={`buttonSaibaMais ${className}`}
        >
            <span>{text}</span>

            <div className="buttonSaibaMaisIcon">
                <img
                    className="iconArrow"
                    src={iconArrow}
                    alt=""
                />

                <img
                    className="iconCircle"
                    src={iconArrowCircle}
                    alt=""
                />
            </div>
        </button>
    );
};