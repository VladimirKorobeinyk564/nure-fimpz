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
                        path: null,
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
                        path: null,
                        nodes: []
                    },
                ],
            },
        ],
    },
];