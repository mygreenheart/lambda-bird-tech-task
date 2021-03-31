import React from 'react'
import "./ResultTable.css"
export default function ResultTable(props) {
    return (
        <div className="container-fluid">
            <table className="table">
                <thead>
                    <tr className="table-info table-striped">
                        <th title="#" scope="col" onClick={props.sortHandler}>#</th>
                        <th title="name" scope="col" onClick={props.sortHandler}> Name</th>
                        <th title="Nat" scope="col">Nat</th>
                        <th title="hitsPercent" scope="col" onClick={props.sortHandler}>Hit%</th>
                        <th title="Hits/Shots" scope="col">Hits/Shots</th>
                        <th title="fireRate" scope="col" onClick={props.sortHandler}>Fire Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {props.statisticData.map((data,) => {
                        return (
                            <tr key={data.place} className="table-info">
                                <th scope="row">{data.place}</th>
                                <td>{data.name}</td>
                                <td>{data.country}</td>
                                <td>{data.hitsPercent}</td>
                                <td>{data.hits + "/" + data.shots}</td>
                                <td>{data.fireRate}</td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}
