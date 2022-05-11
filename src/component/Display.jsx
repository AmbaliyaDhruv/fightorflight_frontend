import React from "react";

class Display extends React.Component{
    render(){
        return (
            <>
            {this.props.data.length===0?null:
             <table>
             <thead>
                 <tr>
                     <th>Airline</th>
                     <th>Bording Time</th>
                     <th>Dispatch Time</th>
                     <th>PNR</th>
                     <th>Cost</th>
                     <th>To</th>
                     <th>From</th>
                 </tr>
             </thead>
             <tbody>

                 {this.props.data.map((e)=>{
                     return <tr key={e._id}>
                     <td>{e.airline_name}</td>
                     <td>{e.startingTime}</td>
                     <td>{e.endingTime}</td>
                     <td>{e.PNR}</td>
                     <td>{e.cost}</td>
                     <td>{e.startAirport.city}</td>
                     <td>{e.endingAirport.city}</td>
                 </tr>
                 })}
                
             </tbody>
         </table>
         }
           
            </>
        )
    }
}

export default Display 