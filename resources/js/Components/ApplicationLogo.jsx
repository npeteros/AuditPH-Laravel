const asset = (path) => {
    return `/storage/images/${path}`;
}

export default function ApplicationLogo({className}) {
    return (
        <img src={asset('audit.png')} alt="Logo" className={className} />
    );
}
