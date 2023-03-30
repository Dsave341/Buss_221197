function Label({htmlFor, id, msn}) {
    return (
        <label htmlFor={htmlFor} id={id}>{msn}</label>
    );
}

export default Label;