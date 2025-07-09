import { 
  AlertDialog, 
  AlertDialogTrigger, 
  AlertDialogContent, 
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription, 
  AlertDialogFooter,
  AlertDialogCancel, 
  AlertDialogAction 
} from "@/components/ui/alert-dialog"

import { Button } from "@/components/ui/button"

export default function ConfirmDelete() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Delete Post</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Action</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete the post? This cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
