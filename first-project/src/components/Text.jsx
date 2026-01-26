const Text = (props) => {
    return (
        <>
            <div>{props.children}</div>
            <p>{props.text}</p>
            <p>{props.secText}</p>
        </>
        
    )
}

export default Text;