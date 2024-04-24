import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";
import instance from "../service/request";

export async function action({ params }) {
  //await deleteContact(params.contactId);
  await instance.get(`/contact/del/${params.contactId}`);
  return redirect("/");
}
