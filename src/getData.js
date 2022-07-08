import React from "react"
import { db } from "./firebase-config";
import {
    getDocs,
    collection,
} from "firebase/firestore";


const Getdata = () => {
    const [users, setUsers] = React.useState([]);
    const usersCollectionRef = collection(db, "userData");

    React.useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    }, []);
    return(
        <>
            <div style={{marginLeft:"30px"}}>
                <table className="styled-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user)=>{
                            return(
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.title}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>


        </>

        // <table>
        //     <thead>
        //     <tr>
        //         <th>Name</th>
        //         <th>Title</th>
        //         <th>Email</th>
        //     </tr>
        //     </thead>
        //     <tbody>
        //     {
        //         users.map((user)=>{
        //             return(
        //                 <tr key={user.id}>
        //                     <td>{user.name}</td>
        //                     <td>{user.title}</td>
        //                     <td>{user.email}</td>
        //                 </tr>
        //             )
        //         })
        //     }
        //     </tbody>
        // </table>

    )
}
export  default  Getdata
