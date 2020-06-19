import Mock from 'mockjs'
import list from '../data/list.json'
import fillist from '../data/datafil.js'
Mock.mock('/getList',list)
Mock.mock('/getfillist',fillist)