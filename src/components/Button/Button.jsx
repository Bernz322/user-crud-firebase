import React from 'react';
import "./button.scss";

const Button = ({ variant, type, text, bold, loading, click }) => {
    let bg;
    let width;
    let margin;
    let padding;

    if (variant === "cyan") {
        bg = "#66ffff";
    } else if (variant === "dark") {
        bg = "#b3b3b3";
    } else {
        bg = "white";
    }

    if (type === "unstyled") {
        width = "fit-content";
        margin = "0 5px";
        padding = "5px 15px";
    } else if (type === "delete") {
        width = "70px";
        margin = "0 4px 0";
        padding = "0 4px 0";
    } else if (type === "add") {
        width = "120px";
        margin = "0 5px";
        padding = "3px 10px";
    } else {
        width = "150px";
        margin = "30px 0";
        padding = "5px 0";
    }

    const btnBgColor = {
        backgroundColor: bg,
        fontWeight: bold ? "700" : "normal",
        minWidth: width,
        borderRadius: "10px",
        margin,
        padding,
    };

    return (
        <button style={btnBgColor} onClick={click} disabled={loading}>
            {loading ?
                <i className="fa fa-spinner loader"></i>
                :
                text
            }
        </button>
    );
};

export default Button;