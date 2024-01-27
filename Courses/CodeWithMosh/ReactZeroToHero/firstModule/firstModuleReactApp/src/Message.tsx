function Message() {
    const name = 'Cristopher';
    if (name) return <h1>Hello {name}</h1>;
    return <h1>Hello User</h1>
}

export default Message;