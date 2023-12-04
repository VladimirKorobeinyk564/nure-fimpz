
interface CodeSnippetProps {
    title?: string | undefined;
    children: React.ReactNode;
}


function CodeSnippet(props: Readonly<CodeSnippetProps>) {
    const {title, children} = props;
    return (
        <div className={'code bg-[#16181d] rounded-[10px] overflow-hidden mb-[20px]'}>
            {title && (
                <div className="title-block font-medium bg-[#343a46] px-[20px] py-[5px] text-primary-color">
                    {title}
                </div>
            )}
            <div className="content p-[20px]">
                {children}
            </div>
        </div>
    );
}

export default CodeSnippet;