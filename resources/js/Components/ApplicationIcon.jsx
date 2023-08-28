const asset = (path) => {
    return `/storage/images/${path}`;
}

export default function ApplicationLogo({className}) {
    return (
        <img src={asset('icon-white.png')} alt="Icon" className={className} />
    );
}
