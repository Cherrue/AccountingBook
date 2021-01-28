import MaterialTable from "material-table";

export const Table = () => {
    const data = [
        {
            transaction_date:"2017-01-09",
            transaction_company:"삼성건설",
            work_start_time:"13:00",
            work_end_time:"16:00",
            concrete_amount:36,
            price:450000,
            equip_amount:2,
            isPayed:false,
            worked_place:"백련사 밑 주택"
        },
        {
            transaction_date:"2016-12-31",
            transaction_company:"혜민건축",
            work_start_time:"08:00",
            work_end_time:"16:00",
            concrete_amount:98,
            price:850000,
            equip_amount:1,
            isPayed:true,
            worked_place:"길직리 축사도로"
        },
        {
            transaction_date:"2016-12-21",
            transaction_company:"장화리이장",
            work_start_time:"08:30",
            work_end_time:"10:30",
            concrete_amount:9,
            price:400000,
            equip_amount:2,
            isPayed:true,
            worked_place:"장화리 펜션"
        }
      ]
      
      const columns = [
        {
            title:"거래일자",
            field:"transaction_date",
        },
        {
            title:"거래처",
            field:"transaction_company",
        },
        {
            title:"시작",
            field:"work_start_time",
        },
        {
            title:"종료",
            field:"work_end_time",
        },
        {
            title:"타설량",
            field:"concrete_amount",
        },
        {
            title:"금액",
            field:"price",
        },
        {
            title:"차량",
            field:"equip_amount",
        },
        {
            title:"수금",
            field:"isPayed",
        },
        {
            title:"작업장소",
            field:"worked_place",
        },
    ]
    return (
        <MaterialTable title="Details" data={data} columns={columns} />
    )
}