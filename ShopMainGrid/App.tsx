import * as React from 'react'
import Image from './components/Image'
import ShopTable from './components/ShopTable'
import { PCFContext } from './contexts/PCFContext'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import * as moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css/'

// const img = require("./image.png")

const localizer = momentLocalizer(moment);


function App(pcfContext: any) {

    return (
        <PCFContext.Provider value={pcfContext}>
            {/* <ShopTable /> */}
            {/* <Image /> */}
            {/* <div className="myCustomHeight"> */}
            <Calendar
                localizer={localizer}
                events={[]}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '500px' }}
            />
        </PCFContext.Provider>
    )
}

export default App