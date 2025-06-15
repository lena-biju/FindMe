import React,{useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import firebaseApp from '../Firebase';
import 'firebase/compat/database';
const Match = () => {
    const[snaps,setSnaps]=useState([])
    let array=[]
   
   
    
    const getdata=()=>{
        firebaseApp.database().ref().child('matched data')
            .once('value').then((snapshot)=>{
                snapshot.forEach(element=>{
                    array.push(element.val())
                })  
                setSnaps(array)
            }) 
    }
    useEffect(() => {
         const getDetails=async()=>{
              await getdata()
              
          }
          getDetails();
          
    },[snaps])

    return (
        <div className='row' style={{ display:'flex'}}>
           <h5>Results : {snaps.length} items</h5>
           {  
               snaps.map((missdata,index)=>{
                return <Card  style={{ margin:"2rem", width: '15rem' }}>
                <Card.Img variant="top" src={missdata.url} height='250px'/>
                <Card.Body>
                  <Card.Title style={{'text-align':'center'}}>{missdata.firstname + ' '+missdata.lastname}</Card.Title>
                  <Card.Text>
                    Location: {missdata.location}
                  </Card.Text>
                  <Card.Text>
                    Report Date: {missdata.reportingdate}
                  </Card.Text>
                </Card.Body>
              </Card>
            })

           }
        </div>
    )
}

export default Match;
