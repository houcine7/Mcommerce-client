import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@radix-ui/react-alert-dialog";
import { Button } from "./ui/button";
import { AlertDialogFooter, AlertDialogHeader } from "./ui/alert-dialog";

export const Alert = ({ handleClick }: { handleClick: () => {} }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="mt-4">
        <Button
          variant="outline"
          className="w-full bg-pink-600 hover:bg-pink-400"
        >
          Create Order
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="absolute bg-white max-w-[320px] p-2 rounded-md -top-10 shadow-xl  left-2 right-2 ">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-bold text-sm text-gray-950 pt-2">
            Are you happy with this order?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-sm font-light">
            Confirm order creation ...
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-row justify-end space-x-2 mt-4 pb-2">
          <AlertDialogCancel className="px-2 py-1 rounded-md bg-red-700 hover:bg-red-400">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="px-2 py-1  rounded-md bg-blue-700 hover:bg-blue-400"
            onClick={handleClick}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
