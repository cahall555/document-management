import 'tailwindcss/tailwind.css'
import React from 'react'

const AccountsTable = () =>{
    return (
 <div className="flex flex-row text-left h-screen mx-auto w-full w-screen bg-gray-100"> 
        <div className="flex flex-row" data-theme="cupcake">
            <div className="">
            <table className="table mx-8 table-zebra text-black">
              <thead>
                <tr>
                  <th></th> 
                  <th>Title</th> 
                  <th>Type</th> 
                  <th>Experation</th>
	    	  <th>Owner</th>
	    	  <th>Actions</th>
                </tr>
              </thead> 
              <tbody>
                <tr>
                  <th>9</th>
	    	  <td>Lesya Tinham - DL</td>
	    	  <td>Drivers License</td>
	    	  <td>2022-02-01</td>
                  <td>Lesya Tinham</td> 
                  <td>Volenteer</td>
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
	    </div>
      )
}
export default AccountsTable;
