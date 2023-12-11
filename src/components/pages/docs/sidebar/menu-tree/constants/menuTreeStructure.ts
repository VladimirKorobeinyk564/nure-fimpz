import {MenuItem} from "@/components/pages/docs/sidebar/menu-tree/menu-tree.tsx";

export const menuItemsList: MenuItem[] = [
    {
        key: 'c6a7b20a-4498-4e37-bc5e-810fcf76d2ab',
        label: 'docsPage.menuTree.practicalWork.label',
        path: '/pz',
        isNavigate: false,
        isActive: false,
        nodes: [
            {
                key: 'f2f0c19e-8b26-4a75-a13e-ef46c8dc6b2f',
                label: 'docsPage.menuTree.practicalWork.pz1.label',
                path: 'pz/pz-1/',
                isNavigate: true,
                isActive: false,
                nodes: [
                    {
                        key: '7fbb9f0d-9532-4783-8fc4-6b145d4acab7',
                        label: 'docsPage.menuTree.practicalWork.pz1.goal',
                        isNavigate: true,
                        path: '#goal',
                        isActive: false,
                        nodes: []
                    },
                    {
                        key: '3rwb9f0d-9532-4783-8fc4-6b145d4acab7',
                        label: 'docsPage.menuTree.practicalWork.pz1.goal2',
                        isNavigate: true,
                        path: '#goal2',
                        isActive: false,
                        nodes: []
                    },
                ],
            },
            {
                key: '9c3f8e69-5d0d-4e3e-b6ee-30a15a54b2a2',
                label: 'docsPage.menuTree.practicalWork.pz2.label',
                path: 'pz/pz-2/',
                isNavigate: true,
                isActive: false,
                nodes: [
                    {
                        key: 'd4fbb1bc-f666-4b1b-981d-1c0eeac1761a',
                        label: 'docsPage.menuTree.practicalWork.pz2.goal',
                        isNavigate: true,
                        path: null,
                        isActive: false,
                        nodes: []
                    },
                ],
            },
        ],
    },
    {
        key: 'e53a83c9-7d28-4d46-a249-9b35829251a6',
        path: '/lb',
        label: 'docsPage.menuTree.laboratoryWork.label',
        isNavigate: false,
        isActive: false,
        nodes: [
            {
                key: '6b82623b-b139-4f63-b6e3-d84e1b02c132',
                label: 'docsPage.menuTree.laboratoryWork.lb1.label',
                path: 'lb/lb-1/',
                isNavigate: true,
                isActive: false,
                nodes: [
                    {
                        key: 'a30dc639-93f8-459e-b490-1a735c7ad95f',
                        label: 'docsPage.menuTree.laboratoryWork.lb1.goal',
                        path: null,
                        isNavigate: true,
                        isActive: false,
                        nodes: []
                    },
                ],
            },
            {
                key: 'b6c02dc9-ecf4-463f-bcd0-6b9d3c44d47d',
                label: 'docsPage.menuTree.laboratoryWork.lb2.label',
                path: 'lb/lb-2/',
                isNavigate: true,
                isActive: false,
                nodes: [
                    {
                        key: '9c3f8e69-21d03-4e3e-b6ee-30a15a54b2a2',
                        label: 'docsPage.menuTree.laboratoryWork.lb2.goal',
                        isNavigate: true,
                        path: null,
                        isActive: false,
                        nodes: []
                    },
                ],
            },
            {
                key: '4dcdfc18-5c3b-4f9c-91e3-0e17d40b3b17',
                label: 'docsPage.menuTree.laboratoryWork.lb3.label',
                path: 'lb/lb-3/',
                isNavigate: true,
                isActive: false,
                nodes: [
                    {
                        key: 'a9e24943-b464-429c-ae26-5790db2b1716',
                        label: 'docsPage.menuTree.laboratoryWork.lb2.goal',
                        isNavigate: true,
                        path: '#programVerificationBasedOnTemporalLogic',
                        isActive: false,
                        nodes: []
                    },
                    {
                        key: 'bd90595b-787b-44c7-a681-66bcc283bbe0',
                        label: 'Методичні вказівки з організації самостійної роботи студентів',
                        isNavigate: true,
                        path: '#methodicalForIndependentWorkOfStudents',
                        isActive: false,
                        nodes: []
                    },
                    {
                        key: '75669922-b5de-4973-957f-b48a45683cb7',
                        label: 'Пакет Spin',
                        isNavigate: true,
                        path: '#spinPackage',
                        isActive: false,
                        nodes: []
                    },
                    {
                        key: '085410ef-7337-4ad4-b109-151c076071c5',
                        label: 'Використання Spin на платформі Windows',
                        isNavigate: true,
                        path: '#usingSpinOnWindows',
                        isActive: false,
                        nodes: []
                    },
                    {
                        key: '0a12735f-7ede-454a-aff8-33fdf6cb8c2e',
                        label: 'Перевірка коректності моделі на основі LTL',
                        isNavigate: true,
                        path: '#сheckingTheModelBasedOnLTL',
                        isActive: false,
                        nodes: []
                    },
                    {
                        key: '7f9f2ee5-5862-4c75-8ed4-65c228b8e584',
                        label: 'Класи властивостей розподілених систем',
                        isNavigate: true,
                        path: '#classesOfPropertiesOfDistributedSystems',
                        isActive: false,
                        nodes: []
                    },
                    {
                        key: 'febce69e-2258-45b1-9949-78b9dfa91ae7',
                        label: 'Оператори Spin у LTL',
                        isNavigate: true,
                        path: '#operatoriSpinAtLTL',
                        isActive: false,
                        nodes: []
                    },
                    {
                        key: 'c7bb0bb5-a9d3-4c5f-9dca-c1fc2644c8a5',
                        label: 'Варіанти індивідуальних завдань',
                        isNavigate: true,
                        path: '#variantsOfIndividualTasks',
                        isActive: false,
                        nodes: []
                    },
                    {
                        key: '7ac57022-a4d5-48ef-9467-1561566b5744',
                        label: 'Контрольні запитання і завдання',
                        isNavigate: true,
                        path: '#controlQuestions',
                        isActive: false,
                        nodes: []
                    },
                    {
                        key: '88011098-41ea-4348-a79b-2c4742f25235',
                        label: 'Перелік посилань',
                        isNavigate: true,
                        path: '#listOfLinks',
                        isActive: false,
                        nodes: []
                    },
                ],
            },
        ],
    },
    {
        key: '47a16012-967e-48d6-bf5e-49a9f33f81ec',
        label: 'docsPage.menuTree.other.label',
        path: null,
        isNavigate: false,
        isActive: false,
        nodes: [
            {
                key: '8ae106ab-9f25-4789-bf5a-7e8e17555a8d',
                label: 'docsPage.menuTree.other.pythonLesson.label',
                path: 'other/python-lesson/',
                isNavigate: true,
                isActive: false,
                nodes: [
                    {
                        key: 'a05fc3d6-9f35-44f8-a48f-0df3d86a689e',
                        label: 'docsPage.menuTree.other.pythonLesson.goal',
                        isNavigate: true,
                        isActive: false,
                        path: '#contractProgrammingPython',
                        nodes: []
                    },
                    {
                        key: 'd105467f-0e97-461d-a4ff-72c7c6f23a3f',
                        label: 'Основна ідея контрактного програмування',
                        isNavigate: true,
                        isActive: false,
                        path: '#theMainIdeaContractProgramming',
                        nodes: []
                    },
                    {
                        key: '234493cf-83b0-48e6-aef7-98aa2903c3c9',
                        label: 'Пакет PyContracts',
                        isNavigate: true,
                        isActive: false,
                        path: '#pyContractsPackage',
                        nodes: []
                    },
                    {
                        key: '69bcdf85-2c97-4db9-aa2c-289ab22f9e24',
                        label: 'Приклад встановлення та використання PyContracts на Ubuntu',
                        isNavigate: true,
                        isActive: false,
                        path: '#exampleOfPyContractsOnUbuntu',
                        nodes: []
                    },
                    {
                        key: 'b58e984a-6666-4321-b496-8ede1f83b280',
                        label: 'Приклад встановлення та використання PyContracts на Windows',
                        isNavigate: true,
                        isActive: false,
                        path: '#installingPyContractsOnWindows',
                        nodes: []
                    },
                    {
                        key: 'db087012-369f-42bc-8aa5-820764c47d9d',
                        label: 'Кроки встановлення',
                        isNavigate: true,
                        isActive: false,
                        path: '#installationSteps',
                        nodes: []
                    },
                    {
                        key: '7900ef18-afad-4b4d-8891-2c5916c4404a',
                        label: 'Тестування налаштованої утиліти',
                        isNavigate: true,
                        isActive: false,
                        path: '#termsOfUse',
                        nodes: []
                    },
                    {
                        key: 'a939eb85-2713-4818-a523-542971990083',
                        label: 'Помилки, які є в прикладі вище',
                        isNavigate: true,
                        isActive: false,
                        path: '#mistakes',
                        nodes: []
                    },
                    {
                        key: '1f3ab914-de9a-41f2-9a19-6f3338103ac3',
                        label: 'Постановка задачі',
                        isNavigate: true,
                        isActive: false,
                        path: '#taskStatement',
                        nodes: []
                    },
                    {
                        key: '46512146-d173-456d-9ec9-e51462111d09',
                        label: 'Варіанти індивідуальних завдань',
                        isNavigate: true,
                        isActive: false,
                        path: '#variantsOfIndividualTasks',
                        nodes: []
                    },
                    {
                        key: '39fc4043-1009-4661-9d81-67640ace16cc',
                        label: 'Контрольні запитання і завдання',
                        isNavigate: true,
                        isActive: false,
                        path: '#controlQuestions',
                        nodes: []
                    },
                ],
            },
        ],
    },
];