interface ImageWrapperProps {
    imgSubtitle?: string;
    image: string;
}

const ImageWrapper = ({imgSubtitle, image}: ImageWrapperProps) => {
    return (
        <div className={"w-full flex justify-center items-center text-center flex-col"}>
            <div className={"flex flex-col gap-[10px] border border-[#e3e4e5] bg-[#f6f7f9] dark:bg-[#343A46] dark:border-[#444955] rounded-[10px] p-[10px]"}>
                <img src={image} alt="image" className={"rounded-[8px]"}/>
                <div className={"w-full text-[19px]"}>
                    <p>{imgSubtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default ImageWrapper;