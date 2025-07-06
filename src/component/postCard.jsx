import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useDispatch } from "react-redux";
import{remove, edit} from "../reduxConcepts/slice"

export default function PostCard() {
  const dispatch = useDispatch();

  return (
    <Card className="w-96 bg-gray-50 dark:bg-zinc-800 p-4 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300 m-4 flex flex-col gap-4">
      <CardHeader className="flex flex-col items-start gap-2">
        <CardTitle className="text-lg text-black dark:text-white">My Awesome Post</CardTitle>
        <Badge className="bg-gray-200 dark:bg-zinc-700 text-black dark:text-white text-xs rounded-full px-2 py-1">
          01 July 2025
        </Badge>
      </CardHeader>
      <CardContent>
        <img
          src="https://placekitten.com/300/200"
          alt="cute kitten"
          className="rounded-lg mb-4 w-full h-40 object-cover"
        />
        <p className="text-gray-600 dark:text-gray-300">
          This is a short description of the post. It's neat and simple.
        </p>
      </CardContent>
      <CardFooter className="flex flex-wrap justify-between gap-2">
        <Button onClick={()=>dispatch(remove(1234))} variant="destructive" className="flex-1">Delete</Button>
        <Button onClick={()=>dispatch(edit())} variant="success" className="flex-1">Edit</Button>
        <Button onClick={()=>dispatch(view())} variant="light" className="flex-1">View</Button>
        <Button onClick={()=>dispatch(edit({
  id: 1234,
  title: "Updated Title",
  description: "Updated Description"
}))} variant="warning" className="flex-1">Add to Fav</Button>
      </CardFooter>
    </Card>
  );
}
