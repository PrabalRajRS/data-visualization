"use client";
import dynamic from 'next/dynamic';
import "./app.css";
const ItemPieChart = dynamic(() => import('@/components/ItemPieChart'), {
    ssr: false,
});
const JsonViewer = dynamic(() => import('@/components/JsonViewer'), {
    ssr: false,
});
import orders from '@/data/orders';
import OrderSummary from '@/components/OrderSummary';
import OrderTable from '@/components/OrderTable';
import QuantityBarChart from '@/components/QuantityBarChart';
import { useState } from 'react';
import _ from "lodash";

export default function App() {
    const [orderData, setOrderData] = useState(orders);
    const [selectedData, setSelectedData] = useState({});
    const orderStatusOptions = [...new Set(orders?.map(order => order.Order_Status))];
    const orderTypeOptions = [...new Set(orders?.map(order => order.Order_Type))];

    const handleSelectOrder = (e) => {
        const value = e.target.value;
        if(value){
            const selected = orderData?.find(order => order.Order_ID == value);
            setSelectedData(selected);
        } else {
            setOrderData(orders)
            setSelectedData({});
        }
    }

    const handleFilter = (e, filter)=>{
        const value = e.target.value;
        if(value && filter){
            let data = orders;
            const filtered = data?.filter(order => order[filter] == value);
            setOrderData(filtered);
            setSelectedData({});
        } else {
            setOrderData(orders);
            setSelectedData({});
        }
    }

    return (
        <div className='main'>
            <h1 className='heading'>Order Visualizer</h1>
            <div className='main-head'>
                <div className='header'>
                    <div>
                        <h4>Filter by Order Status</h4>
                        <select placeholder="Select order status" className='select-box' onChange={e =>handleFilter(e, 'Order_Status')}>
                            <option value={""} key={""} >Select...</option>
                            {
                                orderStatusOptions?.map(status => (
                                    <option value={status} key={status} >{status}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <h4>Filter by Order Type</h4>
                        <select placeholder="Select order type" className='select-box' onChange={e => handleFilter(e, 'Order_Type')}>
                            <option value={""} key={""} >Select...</option>
                            {
                                orderTypeOptions?.map(type => (
                                    <option value={type} key={type} >{type}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <h4>Customer</h4>
                        <select value={selectedData?.Order_ID} placeholder="Select a customer" className='select-box' onChange={handleSelectOrder}>
                            <option value={""} key={""} >Select...</option>
                            {
                                orderData?.map(order => (
                                    <option value={order.Order_ID} key={order.Order_ID} >{`${order.Customer_Name} - ${order.Order_ID}`}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className='order-summary'>
                    <OrderSummary order={selectedData} />
                </div>
            </div>
            {
                !_.isEmpty(selectedData) &&
                <div className='viz-container'>
                    <QuantityBarChart items={selectedData.Items} />
                    <ItemPieChart items={selectedData.Items} />
                    <OrderTable items={selectedData.Items} />
                    <JsonViewer data={selectedData} />
                </div>
            }
        </div>
    );
}
