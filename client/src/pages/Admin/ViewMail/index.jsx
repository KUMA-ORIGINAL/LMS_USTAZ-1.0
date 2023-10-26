import React from 'react'
import MailCard from '../Components/MailCard'

const ViewMail = () => {
  return (
    <div style={{display:"flex", flexWrap:"wrap"}}>
        <MailCard phoneNumber={+996224077979} name="Maksat" />
        <MailCard phoneNumber={+996224077979} name="Maksat" />
        <MailCard phoneNumber={+996224077979} name="Maksat" />
        <MailCard phoneNumber={+996224077979} name="Maksat" />
        <MailCard phoneNumber={+996224077979} name="Maksat" />
        <MailCard phoneNumber={+996224077979} name="Maksat" />
    </div>
  )
}

export default ViewMail