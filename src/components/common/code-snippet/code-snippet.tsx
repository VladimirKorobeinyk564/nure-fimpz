import classes from "./code-snippet.module.scss"
import ReactCodeMirror from "@uiw/react-codemirror";
import {useState} from "react";
import {toast} from "@/components/ui/toast/use-toast";
import {useAppSelector} from "@/hooks/redux";
import {githubLight} from '@uiw/codemirror-theme-github';
import {cn} from "@/lib/utils";

interface CodeSnippetProps {
    title?: string | undefined;
    children: string;
    lang?: any;
}


function CodeSnippet(props: Readonly<CodeSnippetProps>) {
    const {title, children, lang} = props;
    const theme = useAppSelector((state) => state.systemSettings.theme);
    const [isCopyOut, setIsCopyOut] = useState<boolean>(false);

    function copyCode(): void {
        navigator.clipboard.writeText(children)
            .then(() => {
                toast({
                    duration: 900,
                    description: "Code copied successfully.",
                })
            })
            .catch((err) => {
                console.error('Failed to copy code to clipboard:', err);
                toast({
                    variant: "destructive",
                    duration: 900,
                    description: "Code copying error.",
                })
            });
    }

    return (
        <div className={'code border border-[#e3e4e5] bg-[#f6f7f9] dark:bg-[#16181d] dark:border-[#444955] rounded-[10px] overflow-hidden mb-[20px]'}>
            {title && (
                <div className="title-block font-medium bg-[#CFD2D8] dark:bg-[#343a46] px-[20px] py-[5px] text-primary-color">
                    {title}
                </div>
            )}
            <div className="content relative max-[1280px]:text-[13px] max-[1500px]:text-[16px] text-[18px]" onMouseEnter={() => setIsCopyOut(true)} onMouseLeave={() => setIsCopyOut(false)}>
                <ReactCodeMirror value={children} theme={theme === 'dark' ? 'dark' : githubLight} extensions={lang} editable={false} basicSetup={{
                    lineNumbers: false,
                }}/>
                {isCopyOut && (
                    <div className={cn("absolute top-[15px] right-[15px] bg-[#eff2f2] p-[10px] rounded-md transition duration-300 cursor-pointer dark:bg-[#454E59]", classes.copy_btn)} onClick={copyCode}>
                        <svg width="252" height="252" viewBox="0 0 252 252" fill="none" xmlns="http://www.w3.org/2000/svg" className={"w-[15px] h-[15px]"}>
                            <path d="M0 106.312C0 91.098 12.348 78.75 27.5625 78.75H51.1875C54.3204 78.75 57.3249 79.9945 59.5402 82.2098C61.7555 84.4251 63 87.4296 63 90.5625C63 93.6954 61.7555 96.6999 59.5402 98.9152C57.3249 101.13 54.3204 102.375 51.1875 102.375H27.5625C26.5182 102.375 25.5167 102.79 24.7783 103.528C24.0398 104.267 23.625 105.268 23.625 106.312V224.438C23.625 226.611 25.389 228.375 27.5625 228.375H145.688C146.732 228.375 147.733 227.96 148.472 227.222C149.21 226.483 149.625 225.482 149.625 224.438V200.812C149.625 197.68 150.87 194.675 153.085 192.46C155.3 190.245 158.305 189 161.438 189C164.57 189 167.575 190.245 169.79 192.46C172.005 194.675 173.25 197.68 173.25 200.812V224.438C173.25 231.748 170.346 238.758 165.177 243.927C160.008 249.096 152.998 252 145.688 252H27.5625C20.2525 252 13.2418 249.096 8.07287 243.927C2.9039 238.758 0 231.748 0 224.438L0 106.312Z" className={"fill-[#696b6b] dark:fill-[#CAD1D9]"}/>
                            <path d="M78.75 27.5625C78.75 12.348 91.098 0 106.312 0H224.438C239.652 0 252 12.348 252 27.5625V145.688C252 152.998 249.096 160.008 243.927 165.177C238.758 170.346 231.748 173.25 224.438 173.25H106.312C99.0025 173.25 91.9918 170.346 86.8229 165.177C81.6539 160.008 78.75 152.998 78.75 145.688V27.5625ZM106.312 23.625C105.268 23.625 104.267 24.0398 103.528 24.7783C102.79 25.5167 102.375 26.5182 102.375 27.5625V145.688C102.375 147.861 104.139 149.625 106.312 149.625H224.438C225.482 149.625 226.483 149.21 227.222 148.472C227.96 147.733 228.375 146.732 228.375 145.688V27.5625C228.375 26.5182 227.96 25.5167 227.222 24.7783C226.483 24.0398 225.482 23.625 224.438 23.625H106.312Z" className={"fill-[#696b6b] dark:fill-[#CAD1D9]"}/>
                        </svg>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CodeSnippet;