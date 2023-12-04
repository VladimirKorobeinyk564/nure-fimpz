
interface AccentSpanProps {
    children: React.ReactNode;
}

function AccentSpan(props: Readonly<AccentSpanProps>) {
    const {children} = props;
    return (
        <span className={'text-primary-color text-[18px] font-medium'}>{children}</span>
    );
}

export default AccentSpan;