import MethodologySection from "@/components/common/methodology-section/MethodologySection";

const PyContractsPackage = () => {
    return (
        <MethodologySection title={"Пакет PyContracts"}
                            id={"pyContractsPackage"} isFirstSection={false}>
            <p>
                Для розробки специфікації контрактного програмування на Python
                використаємо пакет PyContracts [2, 2]. Це пакет Python, який
                дозволяє реалізувати підходи «design by contract». Контракти
                можна вказати за допомогою анотацій Python 3 або всередині
                рядка документації. PyContracts підтримує базову систему типів,
                зв’язування змінних, арифметичні обмеження, а також має кілька
                спеціалізованих контрактів і розширення API.
            </p>
        </MethodologySection>
    );
};

export default PyContractsPackage;