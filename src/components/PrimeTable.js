import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';



export const PrimeTable = () => {
    const data = [
        {
            transaction_date:"2017-01-09",
            transaction_company:"삼성건설",
            work_start_time:"13:00",
            work_end_time:"16:00",
            concrete_amount:36,
            price:450000,
            equip_amount:2,
            isPayed:"미수",
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
            isPayed:"수금",
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
            isPayed:"수금",
            worked_place:"장화리 펜션"
        }
    ];
      
    return (
	<div class="card">
		<DataTable value={data}>
			<Column field='transaction_date' header='거래일자' />
			<Column field='transaction_company' header='거래처' />
			<Column field='work_start_time' header='시작' />
			<Column field='work_end_time' header='종료' />
			<Column field='concrete_amount' header='타설량' />
			<Column field='price' header='금액' />
			<Column field='equip_amount' header='차량' />
			<Column field='isPayed' header='수금' />
			<Column field='worked_place' header='작업장소' />
		</DataTable>
	</div>
    );
}