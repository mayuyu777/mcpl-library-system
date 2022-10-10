import React from "react"
const LazyPubAnnouncement = React.lazy(() => import('../components/public_announcements/PublicAnnouncement'));
const LazyCatalog = React.lazy(() => import('../components/catalog/Catalog'));
const LazyCirculation = React.lazy(() => import('../components/circulation/Circulation'));
const LazyAcquisition = React.lazy(() => import('../components/acquisition/Acquisition'));
const LazyUserManagement = React.lazy(() => import('../components/user_management/UserManagement'));
const LazyReports = React.lazy(() => import('../components/report/Reports'));
const LazyWebsiteManagement = React.lazy(() => import('../components/website_management/WebsiteManagement'));
const LazyInventory = React.lazy(() => import('../components/inventory/Inventory'));
const LazyOnlineDatabase = React.lazy(() => import('../components/online_database/OnlineDatabase'));
const LazyQrLoginSystem = React.lazy(() => import('../components/qr_code_login/QrLoginSystem'));
const LazyAddNewRecord = React.lazy(() => import('../components/catalog/AddNewRecord'));
const LazyViewAllRecord = React.lazy(() => import('../components/catalog/ViewAllRecord'));
const LazyAdvanceSearch = React.lazy(() => import('../components/catalog/AdvanceSearch'));
const LazyDisplayBookDetails = React.lazy(() => import('../components/catalog/DisplayBookDetails'));




export const routeComponents = [
    {
        id:'777-77-1',
        name: 'Public Announcements',
        path: 'public-info',
        component: LazyPubAnnouncement,
        hasAccess: ['admin','librarian','staff'],
        subComponents: []
    },
    {
        id:'777-77-2',
        name: 'Catalog',
        path: 'catalog',
        component: LazyCatalog,
        hasAccess: ['admin','librarian','staff'],
        subComponents: [
            {
                name: 'Add New Record',
                path: 'add-new-rec',
                component: LazyAddNewRecord,
                displaySidebar: true
            },
            {
                name: 'View All Record',
                path: 'view-all-rec',
                component: LazyViewAllRecord,
                displaySidebar: true
            },
            {
                name: 'Advance Search',
                path: 'advance-search',
                component: LazyAdvanceSearch,
                displaySidebar: true
            },
            {
                name: 'Display Book Details',
                path: ':id',
                component: LazyDisplayBookDetails,
                displaySidebar: false
            },
            
        ]
    },
    {
        id:'777-77-3',
        name: 'Circulation',
        path: 'circulation',
        component: LazyCirculation,
        hasAccess: ['admin','librarian','staff'],
        subComponents: []
    },
    {
        id:'777-77-4',
        name: 'Acquisition',
        path: 'acquisition',
        component: LazyAcquisition,
        hasAccess: ['admin','librarian'],
        subComponents: []
        
    },
    {
        id:'777-77-5',
        name: 'Inventory',
        path: 'inventory',
        component: LazyInventory,
        hasAccess: ['admin','librarian'],
        subComponents: []
    },
    {
        id:'777-77-6',
        name: 'User Management',
        path: 'user-management',
        component: LazyUserManagement,
        hasAccess: ['admin','librarian'],
        subComponents: []
    },
    {
        id:'777-77-7',
        name: 'Online Database',
        path: 'online-database',
        component: LazyOnlineDatabase,
        hasAccess: ['admin','librarian'],
        subComponents: []
    },
    {
        id:'777-77-8',
        name: 'Reports',
        path: 'reports',
        component: LazyReports,
        hasAccess: ['admin','librarian','staff'],
        subComponents: []
    },
    {
        id:'777-77-9',
        name: 'Website Management',
        path: 'website-management',
        component: LazyWebsiteManagement,
        hasAccess: ['admin'],
        subComponents: []
    },
    {
        id:'777-77-10',
        name: 'Qr Login System',
        path: 'qr-login-system',
        component: LazyQrLoginSystem,
        hasAccess: ['admin'],
        subComponents: []
    },
    {
        id:'777-77-11',
        name: 'User Information',
        path: 'user-information',
        component: LazyQrLoginSystem,
        hasAccess: ['staff'],
        subComponents: []
    },
]


export const getRoutes = (role) => {

    const routes = routeComponents.filter((route) => {
        const res = route.hasAccess.find((item) => {
            return item === role;
        });
        
        return res;
    })

    return routes;
}


export const getSubRoutes = (path) => {

    const routes = routeComponents.find((item) => {
        return item.path === path
    }).subComponents;
    return routes;
}