function Button(props){
    return(
        <button onClick={props.azione}>{props.nome}</button>
    )
}

export default Button