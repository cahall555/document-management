import 'tailwindcss/tailwind.css'
import React from 'react'

const AccountsTable = () =>{
    return (
  
        <div className="grid-rows-4" data-theme="cupcake">
            <div className="overflow-x-auto">
            <table className="table w-full table-zebra">
              <thead>
                <tr>
                  <th></th> 
                  <th>Name</th> 
                  <th>Type</th> 
                  <th>Favorite Color</th>
                </tr>
              </thead> 
              <tbody>
                <tr>
                  <th>9</th> 
                  <td>Lesya Tinham</td> 
                  <td>Safety Technician IV</td> 
                  <td>Maroon</td>
                </tr>
                <tr>
                  <th>10</th> 
                  <td>Zaneta Tewkesbury</td> 
                  <td>VP Marketing</td> 
                  <td>Green</td>
                </tr>
                <tr>
                  <th>11</th> 
                  <td>Andy Tipple</td> 
                  <td>Librarian</td> 
                  <td>Indigo</td>
                </tr>
                <tr>
                  <th>12</th> 
                  <td>Sophi Biles</td> 
                  <td>Recruiting Manager</td> 
                  <td>Maroon</td>
                </tr>
              </tbody>
            </table>
          </div>
    
        </div>
      )
}
export default AccountsTable;