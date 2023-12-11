interface ImageWrapperProps {
    imgSubtitle?: string;
    image: string;
}

const ImageWrapper = ({imgSubtitle, image}: ImageWrapperProps) => {
    return (
        <div className={"w-full flex justify-center items-center text-center flex-col mb-[20px]"}>
            <div className={"flex flex-col justify-center items-center gap-[10px] border border-[#e3e4e5] bg-[#f6f7f9] dark:bg-[#343A46] dark:border-[#444955] rounded-[10px] p-[10px]"}>
                <img src={image} alt="image" className={"rounded-[8px] max-h-[550px] max-w-[900px]"}/>
                {imgSubtitle && (
                    <div className={"w-full text-[19px] max-w-[800px]"}>
                        <p>{imgSubtitle}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageWrapper;