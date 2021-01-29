import { InputNumber } from 'primereact/inputnumber';
import {InputText} from 'primereact/inputtext'
import {Dropdown} from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import {useState} from "react";

export const PrimeInputForm = () => {
 
    const [value_transaction_date, setValueTransactionDate] = useState(new Date());

    const [value_is_payed, setValueIsPayed] = useState(null);
    const value_is_payeds = [
        { name: '수금', code: 'Y' },
        { name: '미수금', code: 'N' }
    ];
    const [value_work_start_time, setValueWorkStartTime] = useState(null);
    const [value_work_end_time, setValueWorkEndTime] = useState(null);
    

    const [value_price, setValuePrice] = useState(600000);
    const [value_equip_amount, setValueEquipAmount] = useState(0);
 
    return (
        <div className="card">
            <div className="p-col-12 p-md-12">
                <div className="card p-fluid">
                    <div className="p-field p-grid">
                        <label htmlFor="input_transaction_date" className="p-col-12 p-mb-2 p-md-2 p-mb-md-0">거래일자</label>
                        <div className="p-col-12 p-md-10">
                            <Calendar id="basic" value={value_transaction_date} onChange={(e) => setValueTransactionDate(e.value)} />
                        </div>
                    </div>
                    <div className="p-field p-grid">
                        <label htmlFor="input_transaction_company" className="p-col-12 p-mb-2 p-md-2 p-mb-md-0">거래처</label>
                        <div className="p-col-12 p-md-10">
                            <InputText id="input_transaction_company" type="text" />
                        </div>
                    </div>
                    <div className="p-field p-grid">
                        <label htmlFor="input_equip_amount" className="p-col-12 p-mb-2 p-md-2 p-mb-md-0">차량</label>
                        <div className="p-col-12 p-md-4">
                        <InputNumber id="input_equip_amount" value={value_equip_amount} onValueChange={(e) => setValueEquipAmount(e.value)} showButtons buttonLayout="horizontal" step={1}
                            decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" suffix="대"/>
                            
                        </div>
                    </div>
                    <div className="p-field p-grid">
                        <label htmlFor="input_price" className="p-col-12 p-mb-2 p-md-2 p-mb-md-0">금액</label>
                        <div className="p-col-12 p-md-10">
                            <InputNumber id="input_price-us" value={value_price} onValueChange={(e) => setValuePrice(e.value)} mode="currency" currency="KRW" locale="ko-KR" />
                        </div>
                    </div>
                    <div className="p-field p-grid">
                        <label htmlFor="input_work_start_time" className="p-col-12 p-mb-2 p-md-2 p-mb-md-0">시간</label>
                        <div className="p-col-12 p-md-2">
                            <Calendar id="input_work_start_time" value={value_work_start_time} onChange={(e) => setValueWorkStartTime(e.value)} timeOnly />
                        </div>
                        <label htmlFor="input_work_end_time" className="p-col-12 p-mb-2 p-md-1">~</label>
                        <div className="p-col-12 p-md-2">
                            <Calendar id="input_work_end_time" value={value_work_end_time} onChange={(e) => setValueWorkEndTime(e.value)} timeOnly />
                        </div>
                    </div>
                    <div className="p-field p-grid">
                        <label htmlFor="input_is_payed" className="p-col-12 p-mb-2 p-md-2 p-mb-md-0">수금</label>
                        <div className="p-col-12 p-md-4">
                            <Dropdown id="input_is_payed" value={value_is_payed} onChange={(e) => setValueIsPayed(e.value)} options={value_is_payeds} optionLabel="name" placeholder="선택"></Dropdown>
                        </div>
                    </div>
                    <div className="p-field p-grid">
                        <label htmlFor="input_concrete_amount" className="p-col-12 p-mb-2 p-md-2 p-mb-md-0">타설량</label>
                        <div className="p-col-12 p-md-4">
                            <InputNumber id="input_concrete_amount" />
                        </div>
                    </div>
                    <div className="p-field p-grid">
                        <label htmlFor="input_worked_place" className="p-col-12 p-mb-2 p-md-2 p-mb-md-0">비고</label>
                        <div className="p-col-12 p-md-10">
                            <InputText id="input_worked_place" type="text" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 