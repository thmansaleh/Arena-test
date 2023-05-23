import PhoneNumerInput from "./PhoneInput"

export const Form = () => {
  return (
  
  <form action>
    <div>
      <label htmlFor>Name</label>
      <input type="text" />
    </div>
    <div>
      <label htmlFor>Email</label>
      <input type="email" />
    </div>
 <div>


    <label htmlFor>Phone Number</label>
    <PhoneNumerInput/>
    </div>


    <div>
      <label htmlFor="Investment Amount">Investment Amount</label>
      <select name id>
        <option value="100,000 EUR">100,000 EUR</option>
        <option value="200,000 EUR">200,000 EUR</option>
        <option value="300,000 EUR">300,000 EUR</option>
      </select>
    </div>
    <div>
      <label htmlFor>Message</label>
      {/* <input type="email" /> */}
      <textarea></textarea>
    </div>
    <div>

    <button type="submit">Submit</button>
    </div>

  </form>


  )
}
