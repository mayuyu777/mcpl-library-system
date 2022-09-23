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




export const routeComponents = [
    {
        name: 'Public Announcements',
        path: 'public-info',
        component: LazyPubAnnouncement,
        hasAccess: ['admin','librarian','staff'],
        subComponents: []
    },
    {
        name: 'Catalog',
        path: 'catalog',
        component: LazyCatalog,
        hasAccess: ['admin','librarian','staff'],
        subComponents: [
            {
                name: 'Add New Record',
                path: 'add-new-rec',
                component: LazyAddNewRecord
            },
            {
                name: 'View All Record',
                path: 'view-all-rec',
                component: LazyViewAllRecord
            },
            {
                name: 'Advance Search',
                path: 'advance-search',
                component: LazyAdvanceSearch
            }
        ]
    },
    {
        name: 'Circulation',
        path: 'circulation',
        component: LazyCirculation,
        hasAccess: ['admin','librarian','staff'],
        subComponents: []
    },
    {
        name: 'Acquisition',
        path: 'acquisition',
        component: LazyAcquisition,
        hasAccess: ['admin','librarian'],
        subComponents: []
        
    },
    {
        name: 'Inventory',
        path: 'inventory',
        component: LazyInventory,
        hasAccess: ['admin','librarian'],
        subComponents: []
    },
    {
        name: 'User Management',
        path: 'user-management',
        component: LazyUserManagement,
        hasAccess: ['admin','librarian'],
        subComponents: []
    },
    {
        name: 'Online Database',
        path: 'online-database',
        component: LazyOnlineDatabase,
        hasAccess: ['admin','librarian'],
        subComponents: []
    },
    {
        name: 'Reports',
        path: 'reports',
        component: LazyReports,
        hasAccess: ['admin','librarian','staff'],
        subComponents: []
    },
    {
        name: 'Website Management',
        path: 'website-management',
        component: LazyWebsiteManagement,
        hasAccess: ['admin'],
        subComponents: []
    },
    {
        name: 'Qr Login System',
        path: 'qr-login-system',
        component: LazyQrLoginSystem,
        hasAccess: ['admin'],
        subComponents: []
    },
    {
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