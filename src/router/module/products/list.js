export default [
    {
        path: '/products/list',
        props: route => ({ filter_substr: route.query.filter_substr }),
        // props(route) {
        //     return  route.query || {}
        // },
        name: 'ProductsList',
        component: () => import('@/pages/products/products-parts-list'),
        meta: {
            requiresAuth: true,
            breadcrumb: [
                { name: 'Продукты' },
                { name: 'Список' }
            ]
        }
    },

    { path: '/products/list/edit',
        component: () => import('@/pages/products/product-part-editor'),
        props: route => ({ query: route.query.id }),
        name: 'ProductFormEdit',
        meta: {
            requiresAuth: true,
            breadcrumb: [
                { name: 'Продукты' },
                { name: 'Список', link: '/products/list/'  },
                { name: 'Изменение' },
            ]
        }
    },
]