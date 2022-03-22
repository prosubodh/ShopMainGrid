import * as React from 'react'
import useGetAllShops from '../hooks/useGetAllShops'

function ShopTable() {
    const data = useGetAllShops();

    return (
        <div className='shop-table'>
            <div>ShopTable</div>
            <ul>
                {data.map((record, i) => (
                    <li key={i}>{record['sk_name'] || ''}</li>
                ))}
            </ul>
        </div>
    )
}

export default ShopTable