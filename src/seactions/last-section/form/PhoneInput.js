
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'
import ru from 'react-phone-number-input/locale/ru'

const PhoneNumerInput = () => {
    const [value, setValue] = useState()
    return (
      <PhoneInput
      defaultCountry="AE"
international      // placeholder="Enter phone number"
        value={value}
        onChange={setValue}/>
    )
}

export default PhoneNumerInput