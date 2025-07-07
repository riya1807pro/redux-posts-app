  import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { Badge } from "@/components/ui/badge";
  import { useDispatch } from "react-redux";
import{remove, edit, toggleFav} from "../reduxConcepts/slice"

  export default function PostCard({post}) {
    const dispatch = useDispatch();

    return (
      <Card className="w-96 bg-gray-50 dark:bg-zinc-800 p-4 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300 m-4 flex flex-col gap-4">
        <CardHeader className="flex flex-col items-start gap-2">
          <CardTitle className="text-lg text-black dark:text-white">{post.title}</CardTitle>
          <Badge className="bg-gray-200 dark:bg-zinc-700 text-black dark:text-white text-xs rounded-full px-2 py-1">
            {post.date}
          </Badge>
        </CardHeader>
        <CardContent>
          <img
            src={post.image}
            alt="post"
            className="rounded-lg mb-4 w-full h-40 object-cover"
          />
          <p className="text-gray-600 dark:text-gray-300">
           {post.description}
          </p>
        </CardContent>
        <CardFooter className="flex flex-wrap justify-between gap-2">
          <Button onClick={() => dispatch(remove(post.id))} variant="destructive" className="flex-1">Delete</Button>
          <Button onClick={() => {
            const newTitle = prompt("Edit title:", post.title);
            const newDescription = prompt("Edit description:", post.description);
            if (newTitle && newDescription) {
              dispatch(edit({ ...post, title: newTitle, description: newDescription }));
            }
          }} variant="success" className="flex-1">Edit</Button>
          <Button onClick={() => dispatch(toggleFav(post.id))} variant={post.fav ? "success" : "warning"} className="flex-1">
            {post.fav ? "Remove Fav" : "Add to Fav"}
          </Button>
        </CardFooter>
      </Card>
    );
  }
