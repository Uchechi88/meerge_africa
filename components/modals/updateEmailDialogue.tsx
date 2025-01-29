import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { FormControl, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const UpdateEmailDialogue = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [email, setEmail] = useState("");

  const handleUpdate = () => {
    console.log("Updated Email:", email);
    onClose(); 
  };

  return (
    <Dialog open={isOpen} onOpenChange={(isOpen) => isOpen && onClose()}>
      <DialogContent className="max-w-lg w-full p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Update Email
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <FormControl>
            <FormLabel className="mb-2">New Email Address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your new email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
          </FormControl>
        </div>
        <DialogFooter className="mt-6 flex justify-end gap-4">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button  onClick={handleUpdate}>
            Update
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateEmailDialogue;
