import * as React from 'react'
import { PCFContext } from '../contexts/PCFContext';

function useGetAllShops() {
    const [data, setData] = React.useState<any[]>([]);
    const context: any = React.useContext(PCFContext);

    React.useEffect(() => {

        if (window.location.hostname === 'localhost') {
            setData([
                { sk_name: "One" },
                { sk_name: "Two" }
            ])
        } else {
            (async function () {
                let result = await context?.webAPI.retrieveMultipleRecords("sk_shop",
                    `?fetchXml=<fetch mapping='logical'>
                        <entity name='${"sk_shop"}'>
                        </entity>
                    </fetch>`
                );

                setData(result.entities);
            }())
        }
    }, []);

    return data;
}

export default useGetAllShops