import Mock from 'mockjs'
import list from '../data/list.json'
import fillist from '../data/datafil'
Mock.mock('/getlist',list)
Mock.mock('/getfillist',fillist)