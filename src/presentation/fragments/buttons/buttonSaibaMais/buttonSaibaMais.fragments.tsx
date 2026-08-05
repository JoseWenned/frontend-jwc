import "./buttonSaibaMais.style.scss";
import iconArrow from "../../../../assets/images/icons/icon-set-right.svg";
import iconArrowCircle from "../../../../assets/images/icons/icon-seta-com-circulo.svg";

interface ButtonSaibaMaisProps {
    text?: string;
    visible?: boolean;
    onClick?: () => void;
    className?: string;
}

export const ButtonSaibaMais = ({
    text = "Saiba mais",
    visible = true,
    onClick,
    className = "",
}: ButtonSaibaMaisProps) => {
    return (
       <button
            onClick={onClick}
            className={`buttonSaibaMais ${
                visible ? "show" : ""
            } ${className}`}
        >
            <span>{text}</span>

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
        </button>
    );
}