import './ExpenseForm.css'
import React, {useState} from 'react';


const ExpenseForm = ()=>{
   // to raise validation errors
   let [errors, raiseErro] = useState('');
   let [amount, raiseAmount] = useState('');
   let [date, raiseDate] = useState();


   // to store use inputs
   const [exp_title, setTitle] = useState('');
   const [exp_amount, setAmount] = useState('');
   const [exp_date, setDate] = useState();


   const titleValidator = (event)=>{
      // console.log(event)
      let title = String(event.target.value);
      if(title.length <3){
         raiseErro('Title must contains at 3 characters');
      }else{
         raiseErro('')
         setTitle(title);
      }
   };

   const amountValidator = (event)=>{
      // console.log(event)
      let amount = event.target.value;
      if(amount <10){
         raiseAmount('Amount must contains at least $10');
      }else{
         raiseAmount('')
         setAmount(amount);
      }
   };

   const dateValidator = (event)=>{
      // console.log(event)
      let date = event.target.value;
      if(date == undefined){
         raiseErro('Title must contains at 3 characters');
      }else{
         raiseErro('')
         setDate(date);
      }
   };

   const form_submit_handler = () =>{
      if(exp_date == undefined){
         raiseDate('Date is required ')
      }else{
         
      }


   };
   return (
      <div className="expense-form">

         <form action="">
            <div className="expense_form_controler">

               <div className="input_field_controler">
                  <label htmlFor="title">Tile:</label>
                  <input type="text" name="title" onChange={titleValidator} />
                  <p className="inputs-errors">{errors}</p>
               </div>

               <div className="input_field_controler">
                  <label htmlFor="amount">Amount:</label>
                  <input type="number" name="amount"   onChange={amountValidator} />
                  <p className="inputs-errors">{amount}</p>

               </div>

               <div className="input_field_controler">
                  <label htmlFor="date">Date:</label>
                  <input type="date" name="date" onChange={dateValidator}/>
                  <p className="inputs-errors">{date}</p>

               </div>

            </div>

            <div className="submit_action">
               <button type='submit' onClick={form_submit_handler}>Add Expense</button>

            </div>
           
         </form>

      </div>
   );
};

export default ExpenseForm;