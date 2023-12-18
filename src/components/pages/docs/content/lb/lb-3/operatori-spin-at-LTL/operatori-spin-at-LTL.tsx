import MethodologySection from "@/components/common/methodology-section/MethodologySection";
import {useTranslation} from "react-i18next";

const OperatoriSpinAtLtl = () => {
    const {t} = useTranslation();

    return (
        <MethodologySection title={t('docsPage.menuTree.laboratoryWork.lb3.spinOperatorsLTL')} id={"operatoriSpinAtLTL"} isFirstSection={false}>
            <table className="w-full table-auto">
                <thead>
                <tr className={"text-center text-[23px] font-bold"}>
                    <th className="border border-[#444955] p-2">SPIN</th>
                    <th className="border border-[#444955] p-2">LTL</th>
                    <th className="border border-[#444955] p-2">{t('docsPage.content.lb.lb3.spinOperatorsLTL.table1')}</th>
                </tr>
                </thead>
                <tbody>
                <tr className={"text-center"}>
                    <td className="border border-[#444955] p-2">&lt;&gt;q</td>
                    <td className="border border-[#444955] p-2">Fq</td>
                    <td className="border border-[#444955] p-2">{t('docsPage.content.lb.lb3.spinOperatorsLTL.table2')}</td>
                </tr>
                <tr className={"text-center"}>
                    <td className="border border-[#444955] p-2">[]q</td>
                    <td className="border border-[#444955] p-2">Gq</td>
                    <td className="border border-[#444955] p-2">{t('docsPage.content.lb.lb3.spinOperatorsLTL.table3')}</td>
                </tr>
                <tr className={"text-center"}>
                    <td className="border border-[#444955] p-2">w U q</td>
                    <td className="border border-[#444955] p-2">w U q</td>
                    <td className="border border-[#444955] p-2">{t('docsPage.content.lb.lb3.spinOperatorsLTL.table4')}</td>
                </tr>
                </tbody>
            </table>
        </MethodologySection>
    );
};

export default OperatoriSpinAtLtl;