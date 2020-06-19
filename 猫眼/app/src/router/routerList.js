import withLoadable from '../until/widthLoading'
// import Login from '../views/Login'
// import Layout from '../views/Layout'
// import Movie from '../views/layout/Movie'
// import Cinema from '../views/layout/Cinema'
// import My from '../views/layout/My'
// import Hot from '../views/layout/movie/Hot'
// import Ing from '../views/layout/movie/Ing'
// import Address from '../views/Address'
// import Search from '../views/search'
const Layout=withLoadable(()=>import('../views/Layout'))
const Address=withLoadable(()=>import('../views/Address'))
const Hot=withLoadable(()=>import('../views/layout/movie/Hot'))
const My=withLoadable(()=>import('../views/layout/My'))
const Search=withLoadable(()=>import('../views/search'))
const Movie=withLoadable(()=>import('../views/layout/Movie'))
const Cinema=withLoadable(()=>import('../views/layout/Cinema'))
const Ing=withLoadable(()=>import('../views/layout/movie/Ing'))
const Login =withLoadable(()=>import('../views/Login'))
let list = [
    // {
    //     path: '/login',
    //     component: Login
    // }
    // ,{
    //     path:'/search',
    //     component:Search
    // },
    // {
    //     path: '/layout',
    //     component: Layout,
    //     children:[
    //         {
    //             path:'/layout/movie',
    //             component:Movie,
    //             children:[
    //                 {
    //                     path:'/layout/movie/hot',
    //                     component:Hot
    //                 },
    //                 {
    //                     path:'/layout/movie/ing',
    //                     component:Ing
    //                 }
    //             ]
    //         },
    //         {
    //             path:'/layout/cinema',
    //             component:Cinema
    //         },
    //         {
    //             path:'/layout/my',
    //             component:My
    //         }
    //     ]                                                                                                                                                                             
    // },
    // {
    //     path:"/address",
    //     component:Address
    // },{
    //     redirect:'/layout/movie/hot'
    // }
    {
        path: '/login',
        component: Login
    }, {
        path: '/search',
        component: Search
    }, {
        path: '/layout',
        component: Layout,
        children: [
            {
                path: '/layout/movie',
                component: Movie,
                children: [
                    {
                        path: '/layout/movie/hot',
                        component: Hot
                    },
                    {
                        path: '/layout/movie/ing',
                        component: Ing
                    },
                    {
                        redirect: '/layout/movie/hot'
                    }
                ]
            },
            {
                path: '/layout/cinema',
                component: Cinema
            },
            {
                path: '/layout/my',
                component: My
            }
        ]
    },
    {
        redirect: '/layout/movie/hot'
    }
]
export default list