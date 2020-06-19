import Home from "../component/home"
import Login from "../component/login"
//
import Shoop from "../component/shoop"
// import Price from "../components/price"
import Pj from "../component/pj"
import Sj from "../component/sj"
export default [
    {
        path: "/home",
        com: Home,
        children: [
            {
                path: "/home/shoop",
                title: "点菜",
                com: Shoop
            },
            {
                path: "/home/pj",
                title: "评价",
                com: Pj
            }, ,
            {
                path: "/home/sj",
                title: "商家",
                com: Sj
            }
        ]
    },
    {
        path: "/login",
        com: Login,
    }
]