import ukraineFlag from "@/assets/icons/common/ukraine-flag.svg";

function SupportUkraine() {
    return <div className="support-ukraine absolute text-dark-subtext-color inline-flex justify-center items-center py-[20px] bottom-0 w-full">
        <p className={'mr-[5px]'}>#supportUkraine</p>
        <img src={ukraineFlag} alt="UA"/>
    </div>;
}

export default SupportUkraine;