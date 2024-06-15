import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";
import {deleteUserFoodLog, listUserFoodLogs} from "../service/UserFoodLogService.js";
import ProteinChart from "./ProteinChart.jsx";
import CarbohydrateChart from "./CarbohydrateChart.jsx";
import FatChart from "./FatChart.jsx";
import './Charts.css';

const ListUserFoodLogComponent = () => {

    const [userFoodLogs, setUserFoodLogs] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllUserFoodLogs();
    }, []);

    function getAllUserFoodLogs() {
        listUserFoodLogs().then((response) => {
            setUserFoodLogs(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewUserFoodLog() {
        navigator("/add-userFoodLog")
    }

    function updateUserFoodLog(id) {
        navigator(`/edit-userFoodLog/${id}`)
    }

    function removeUserFoodLog(id) {
        console.log(id);

        deleteUserFoodLog(id).then(() => {
            getAllUserFoodLogs();
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <div className="container">
            <h2 className="text-center">List of UserFoodLogs</h2>
            <button className="btn btn-dark mb-2" onClick={addNewUserFoodLog}>Add UserFoodLog</button>
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>user_id</th>
                    <th>food_id</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {
                    userFoodLogs.map(userFoodLog =>
                        <tr key={userFoodLog.id}>
                            <td>{userFoodLog.id}</td>
                            <td>
                                <ul>
                                    <li>{userFoodLog.user.id}</li>
                                    <li>{userFoodLog.user.name}</li>
                                    <li>{userFoodLog.user.email}</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>{userFoodLog.food.id}</li>
                                    <li>{userFoodLog.food.name}</li>
                                    <li>Energia: {userFoodLog.food.calorie} kcal</li>
                                    <li>Zsír: {userFoodLog.food.fat}g</li>
                                    <li>Szénhidrát: {userFoodLog.food.carbohydrate}g</li>
                                    <li>Fehérje: {userFoodLog.food.protein}g
                                        <div className="charts-container">
                                            <FatChart fat={userFoodLog.food.fat}/>
                                            <CarbohydrateChart carbohydrate={userFoodLog.food.carbohydrate}/>
                                            <ProteinChart protein={userFoodLog.food.protein}/>
                                        </div>
                                    </li>
                                </ul>
                            </td>
                            <td>{userFoodLog.date}</td>
                            <td>
                                <button className="btn btn-info" onClick={() => updateUserFoodLog(userFoodLog.id)}>Update</button>
                                <button className="btn btn-danger" onClick={() => removeUserFoodLog(userFoodLog.id)}
                                style={{marginLeft: "10px"}}>Delete</button>
                            </td>
                        </tr>)
                }
                </tbody>
            </table>
        </div>
    )
}

export default ListUserFoodLogComponent
