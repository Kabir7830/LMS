import React from "react";
import './globalStyles.css'; // gobal style
import styles from './CompanyDetails.module.css'
class CompanyDetails extends React.Component
{
    render()
    {
        return(
           <div style={{
            textAlign:'center',
           }}>
            <table className="global-text"> {/* global Styling */}
                <thead className={styles.tableHead}> {/* Module Styling */}
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                        
                    </tr>
                </thead>
                <tbody className={styles.tableData}> {/* Module Styling */}
                    <tr>
                        <td>F1</td>
                        <td>2 Cr</td>
                    </tr>
                    <tr>
                        <td>Ferari</td>
                        <td>1.4 Cr</td>
                    </tr>
                    <tr>
                        <td>Bentlay</td>
                        <td>3.1 Cr</td>
                    </tr>
                </tbody>
            </table>
           </div>
        )
    }
}

export default CompanyDetails;