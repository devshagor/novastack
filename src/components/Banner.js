export default function Banner({title, description}) {
    return (
        <section className="banner section-padding">
            <div className="content">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </section>
    );
}