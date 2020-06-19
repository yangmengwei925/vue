let data=[
    {id:0,title:"海淀区",list:[
        '大兴区','顺义区','海淀区','房山区','通州区','昌平区','门头沟区'
    ]},
    {
     id:1,title:"全部门店",list:[
         {typeTitle:"距我最近",list:['标准洗车','全部精洗','全车打蜡','内饰精细']},
         {typeTitle:"距我最远",list:['豪车美容','打蜡抛光','全车除尘']},
        
     ]
    },
    {
        id:2,title:"价格排序",list:[
            {typeTitle:"升序",list:['途虎工厂店','认证店','星级保养点','快修店','维修厂','4S店']},
            {typeTitle:'降序',list:['上门服务','排队等候','紧急服务']}
        ]
    }
]

let DataList=[
    {title:"途虎养车工场店",adress:"(北京安宁庄前街店)",type:1},
    {title:"途虎养车工场店",adress:"(北京建材城西路店)",type:1},
    {title:"途虎养车工场店",adress:"(北京东北旺西路店)",type:1},
]

module.exports={data,DataList};