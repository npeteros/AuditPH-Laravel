const asset = (path) => {
    return `/storage/images/${path}`;
}

export default function Background() {
    return (
        <img src={asset('bg.svg')} className="fixed top-10" />
    );
}