import './ExpenseForm.css'

const ExpenseForm = ()=>{
   return (
      <div className="expense-form">

         <form action="" method="post">
            <div className="expense_form_controler">

               <div className="input_field_controler">
                  <label htmlFor="title">Tile:</label>
                  <input type="text" name="title" />
               </div>

               <div className="input_field_controler">
                  <label htmlFor="amount">Amount:</label>
                  <input type="number" name="amount" />
               </div>

               <div className="input_field_controler">
                  <label htmlFor="date">Date:</label>
                  <input type="date" name="date" />
               </div>


            </div>

            <div className="submit_action">
               <button type='submit'>Add Expense</button>

            </div>
           
         </form>

      </div>
   );
};

export default ExpenseForm;