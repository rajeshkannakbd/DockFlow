import {FaWhatsapp,FaPhoneAlt} from "react-icons/fa";

function FloatingButtons(){

return(

<div className="fixed bottom-6 right-6 flex flex-col gap-4">

<a

href="https://wa.me/917538821468"

className="bg-green-500 p-4 rounded-full text-white text-xl shadow-lg"

>

<FaWhatsapp/>

</a>

<a

href="tel:+917538821468"

className="bg-primary p-4 rounded-full text-white text-xl shadow-lg"

>

<FaPhoneAlt/>

</a>

</div>

)

}

export default FloatingButtons;