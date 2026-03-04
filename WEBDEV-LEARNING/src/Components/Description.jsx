
export const Description = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <div>
                {props.children}
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quod nostrum expedita! 
                Reiciendis autem optio sed, eius voluptatem aliquid provident voluptates nostrum 
                eniam velit distinctio reprehenderit earum aperiam, amet ipsam.
            </p>
        </div>
    )
}