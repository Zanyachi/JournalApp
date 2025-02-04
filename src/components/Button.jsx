/* eslint-disable react/prop-types */


function Button( {label, onClick, color, border, padding, textColor}){

    const style = {
            backgroundColor: color,
            textColor: textColor,
            padding: padding,
            borderRadius: border,
        }

    return(
        <button style={style} className="btn" onClick={onClick}>{label}</button>
    )
}

export default Button