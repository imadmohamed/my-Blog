import connectMongo from "@/utils/connectMongo";
import EnquryModel from "@/models/enquiryModel"

export async function POST(req){
    try{
        const {name,email,message} =  await req.json();
   const enquiry = {name,email,message}
   await connectMongo();
   await EnquryModel.create(enquiry)
   return Response.json({message: 'Enquiry has been sent!'})
    }catch(error){
        return Response.json({message: error._message})

    }
   
}