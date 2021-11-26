import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddANewOption.css';

const AddANewOption = () => {

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data)
  axios.post('https://evil-broomstick-73449.herokuapp.com/services', data)
  .then(res =>{
if(res.data.insertedId){
 alert('added successfully');
 reset();
}
  })
  };

  return (
    <div className='text-center add-booking'>
      <h2>Add A New Option</h2>
      <hr className='w-25 mx-auto'/>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("img")} placeholder='Image url'/>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder='Tour place'/>
      <textarea {...register("description")} placeholder='description'/> 
      <input {...register("duration", { required: true})} placeholder='Duration'/>
      <input {...register("cost")} placeholder='Add Price'/>
      
      <input className='bg-info' type="submit" value='Add Option' />
    </form>
    </div>
  );
};

export default AddANewOption;