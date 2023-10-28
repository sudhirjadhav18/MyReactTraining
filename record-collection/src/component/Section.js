const Section = ({ children, headingText, headingLevel = 2, className }) => {
    const H = `h${headingLevel}`;
    const _class = `_card ${className}`;

    return <section className={_class}>
        <H className="_center">{headingText}</H>
        {children}
    </section>
}

export default Section;