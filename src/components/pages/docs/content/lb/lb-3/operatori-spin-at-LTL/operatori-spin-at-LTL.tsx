import MethodologySection from "@/components/common/methodology-section/MethodologySection";

const OperatoriSpinAtLtl = () => {
    return (
        <MethodologySection title={"Оператори Spin у LTL"} id={"operatoriSpinAtLTL"} isFirstSection={false}>
            <table className="w-full table-auto">
                <thead>
                <tr className={"text-center text-[23px] font-bold"}>
                    <th className="border border-[#444955] p-2">SPIN</th>
                    <th className="border border-[#444955] p-2">LTL</th>
                    <th className="border border-[#444955] p-2">Пояснення</th>
                </tr>
                </thead>
                <tbody>
                <tr className={"text-center"}>
                    <td className="border border-[#444955] p-2">&lt;&gt;q</td>
                    <td className="border border-[#444955] p-2">Fq</td>
                    <td className="border border-[#444955] p-2">Хоча б одного разу у майбутньому q</td>
                </tr>
                <tr className={"text-center"}>
                    <td className="border border-[#444955] p-2">[]q</td>
                    <td className="border border-[#444955] p-2">Gq</td>
                    <td className="border border-[#444955] p-2">Завжди у майбутньому q</td>
                </tr>
                <tr className={"text-center"}>
                    <td className="border border-[#444955] p-2">w U q</td>
                    <td className="border border-[#444955] p-2">w U q</td>
                    <td className="border border-[#444955] p-2">w до моменту, коли настане q</td>
                </tr>
                </tbody>
            </table>
        </MethodologySection>
    );
};

export default OperatoriSpinAtLtl;