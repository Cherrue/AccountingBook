import {useTable} from "react-table";

export const Reacttable = () => {

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
      Header:"거래일자",
      accessor:"transaction_date",
  },
  {
      Header:"거래처",
      accessor:"transaction_company",
  },
  {
      Header:"시작",
      accessor:"work_start_time",
  },
  {
      Header:"종료",
      accessor:"work_end_time",
  },
  {
      Header:"타설량",
      accessor:"concrete_amount",
  },
  {
      Header:"금액",
      accessor:"price",
  },
  {
      Header:"차량",
      accessor:"equip_amount",
  },
  {
      Header:"수금",
      accessor:"isPayed",
  },
  {
      Header:"작업장소",
      accessor:"worked_place",
  },
]

const {
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
} = useTable({
  columns,
  data,
})

return (
<table {...getTableProps()}>
  <thead>
    {headerGroups.map((headerGroup) => (
      <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map((column) => (
          <th {...column.getHeaderProps()}>{column.render("Header")}</th>
        ))}
      </tr>
    ))}
  </thead>
  <tbody {...getTableBodyProps()}>
    {rows.map((row, i) => {
      prepareRow(row);
      return (
        <tr {...row.getRowProps()}>
          {row.cells.map((cell) => {
            return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
          })}
        </tr>
      );
    })}
  </tbody>
</table>
);

}