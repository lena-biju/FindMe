import React, { useState } from 'react';
import './Register.css';
import axios from 'axios'
import firebaseApp from '../Firebase';
import 'firebase/compat/database';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Register() {
    const [fname,SetFname]=useState('');
    const [Lname,SetLname]=useState('');
    const [age, SetAge] = useState(null);
    const [gender, setGender] = useState('');
    const [region,SetRegion]=useState('');
    const [height,SetHeight]=useState('');
    const [weight,SetWeight]=useState('');
    const [colour,SetColour]=useState('');
    const [lastseen,SetLastseen]=useState('');
    const [des,SetDes]=useState('');
    const [file,setFile] = useState(null);
    const[value,setValue] =useState(0)
    let dt= new Date()
    
    const imagehandle =(e)=>{
        const datas=[]
        if(e.currentTarget.files.length >=3){
        for(let i =0; i<e.currentTarget.files.length;i++){
            const v= e.currentTarget.files[i]
            datas.push(v)
        }}else{ toast.info('Upload atleast 3 photos, recommended: 5',{position: toast.POSITION.TOP_CENTER})}
        setFile(datas)
        setValue(1)
    }
    const handleSubmit= e =>{
        e.preventDefault()

        value?toast.info('Waiting for Response',{autoClose:10000,position: toast.POSITION.TOP_CENTER}):toast.error("Failed in Image Upload",{autoClose:10000,position: toast.POSITION.TOP_CENTER})
        let form_data = new FormData();
        form_data.append('firstname',fname);
        form_data.append('lastname',Lname);
        for(var i =0; i<file.length;i++){
            
            form_data.append('image',file[i])
        }
        
        var storage=firebaseApp.database().ref('missing data').child(fname+Lname);
        
        
        axios.post(`${value}`,form_data,{
            headers:{
                'content-type':'multiple/form-data'
            }
        })
        .then((res)=>{
            firebaseApp.storage().ref(`images/${file[0].name}`).put(file[0]).then(({ref})=>{
                ref.getDownloadURL().then((url)=>{
                    storage.set({
                        'age':age,
                        'description':des,
                        'encoding':res.data,
                        'firstname':fname,
                        'gender':gender,
                        'lastname':Lname,
                        'region':region,
                        'height':height,
                        'weight':weight,
                        'color':colour,
                        'lastseen':lastseen,
                        'reportingdate':dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear(),
                        'url':url.toString()

                    })
                    .then(obj=>toast.success('Sucessfully Uploaded',{autoClose:10000,position: toast.POSITION.TOP_CENTER}))

                })
                .catch(err=>toast.error(`${err.message}`,{autoClose:10000,position: toast.POSITION.TOP_CENTER}))
            })
            
                    
                    

        })
        .catch((err)=> toast.error(`${err}`,{autoClose:10000,position: toast.POSITION.TOP_CENTER}))
        SetFname('')
        SetLname('')
        SetAge('')
        SetRegion('')
        SetHeight('')
        SetWeight('')
        SetLastseen('')
        SetColour('')
        SetDes('') 
        e.target.reset();      
        /*
        firebaseApp.storage().ref(`images/${file.name}`).put(file).then(({ref})=>{
    
            ref.getDownloadURL().then((url)=>{
                
                
                    axios.post(`${value}`, form_data, {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                    })
                
                .then((res)=>{
                    
                    var storage=firebaseApp.database().ref('missing data').child(fname+Lname);
                    storage.set({
                        'age':age,
                        'description':des,
                        'encoding':res.data,
                        'firstname':fname,
                        'gender':gender,
                        'lastname':Lname,
                        'region':region,
                        'reportingdate':dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate(),
                        'url':url.toString()

                    })
                    .then(obj=>toast.success('Sucessfully Uploaded',{autoClose:10000,position: toast.POSITION.TOP_CENTER}))
                    .catch(err=>toast.error(`${err.message}`,{autoClose:10000,position: toast.POSITION.TOP_CENTER}))
                })
                .catch((err)=> toast.error("Invalid Image",{autoClose:10000,position: toast.POSITION.TOP_CENTER}))
            })
        })
        .catch(err=>{
            toast.error(`${err.message}`,{autoClose:10000,position: toast.POSITION.TOP_CENTER})
        })
        */
        
    }

        return (
            <div className="container">
            <h1>Register New case</h1>
        <form onSubmit={handleSubmit} autoComplete='off'>
            <div className="row">
            <div className="col-25">
                <label for="fname">First Name</label>
            </div>
            <div className="col-75">
                <input type="text" value={fname} onChange={e=> SetFname(e.currentTarget.value)} id="fname" name="firstname" placeholder="Your name.." required />
            </div>
            </div>
            <div className="row">
            <div className="col-25">
                <label for="lname">Last Name</label>
            </div>
            <div className="col-75">
                <input type="text" value={Lname} onChange={e=> SetLname(e.currentTarget.value)} id="lname" name="lastname" placeholder="Your last name.." required/>
            </div>
            </div>
            <div className="row">
            <div className="col-25">
                <label for="lname">Age</label>
            </div>
            <div className="col-75">
                <input type="text" value={age} onChange={e=> SetAge(e.currentTarget.value)} id="age" name="age" placeholder="Age" required/>
            </div>
            </div>
            <div className="row">
            <div className="col-25">
                <label for="lname">Gender</label>
            </div>
            <div className="custom-select col-75" >
                <select title='Gender' onChange={(e)=>setGender(e.target.value)}  required>
                    <option selected>---select gender---</option>
                    <option>Male</option>
                    <option >Female</option>
                    <option >other</option>
                </select>
            </div>
            </div>
            <div className="row">
            <div className="col-25">
                <label for="country">Region</label>
            </div>
            <div className="col-75">
                <input type="text" value={region} onChange={e=> SetRegion(e.currentTarget.value)} id="region" name="region" placeholder="region" required/>
            </div>
            </div>
            <div className="row">
            <div className="col-25">
                <label for="country">Height</label>
            </div>
            <div className="col-75">
                <input type="text" value={height} onChange={e=> SetHeight(e.currentTarget.value)} id="region" name="region" placeholder="height" required/>
            </div>
            </div>
            <div className="row">
            <div className="col-25">
                <label for="country">Weight</label>
            </div>
            <div className="col-75">
                <input type="text" value={weight} onChange={e=> SetWeight(e.currentTarget.value)} id="region" name="region" placeholder="weight" required/>
            </div>
            </div>
            <div className="row">
            <div className="col-25">
                <label for="country">Skin Colour</label>
            </div>
            <div className="col-75">
                <input type="text" value={colour} onChange={e=> SetColour(e.currentTarget.value)} id="region" name="region" placeholder="skin color" required/>
            </div>
            </div>
            <div className="row">
            <div className="col-25">
                <label for="country">Lastseen</label>
            </div>
            <div className="col-75">
                <input type="text" value={lastseen} onChange={e=> SetLastseen(e.currentTarget.value)} id="region" name="region" placeholder="last seen" required/>
            </div>
            </div>
            <div className="row">
            <div className="col-25">
                <label for="description">Description</label>
            </div>
            <div className="col-75">
                <textarea id="des" value={des} onChange={e=> SetDes(e.currentTarget.value)} name="description" placeholder="Write something.." required></textarea>
            </div>
            <div className="col-25">
                <label for="Image">ImageUpload</label>
            </div>
            <div className="col-75">
                <input type="file" name='img' src={file} onChange={imagehandle} multiple accept="image/*" />
            </div>
            </div>
            <div className="row">
            <input type="submit" onClick={imagehandle} value="Submit"/>
            </div>
        </form>
    </div>
        );
    
}


export default Register;
