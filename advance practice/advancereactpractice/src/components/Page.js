
import { Form ,redirect} from "react-router-dom";

export const action=async ({request})=>{
      const formData=await request.formData()

      const name=formData.get("name")
      const age=formData.get("age")

      console.log(name,age)
      return redirect("/profile")
     
}

function Page() {
 
    return (
       <Form method="post">
          <input type="text" name="name" />
          <input type="text" name="age" />
          <button>submit</button>
       </Form>
    )
  }

  export default Page;