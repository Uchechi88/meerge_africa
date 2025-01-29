import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
  } from "@/components/ui/dialog";
  import ActionBtn from "@/components/btns/actionbtn";
  import Logo from "@/components/ui/logo";
  import { AwaitingVerificationIcon } from "@/public/assets/svgs";
  import React from "react";
  
  const AwaitingVerificationModal = ({
    isOpen,
    onClose,
  }: {
    isOpen: boolean;
    onClose: () => void;
  }) => {
    return (
      <Dialog open={isOpen} onOpenChange={(isOpen) => isOpen && onClose()}>
        <DialogContent
          className="max-w-4xl w-full p-8 pb-14"
          onClick={(e) => e.stopPropagation()} 
        >
          <DialogHeader>
            <DialogTitle>
              <div className="flex flex-col items-center mt-10">
                <Logo />
                <div className="my-4">
                  <AwaitingVerificationIcon />
                </div>
              </div>
            </DialogTitle>
            <DialogDescription>
              <h2 className="text-3xl text-black font-bold mb-2 text-center">
                Verification is ongoing!
              </h2>
              <p className="text-xl text-black mb-4 text-center">
                Your account will be activated within 24 hours.
              </p>
            </DialogDescription>
          </DialogHeader>
  
          <div className="text-center mb-4">
            <ActionBtn text="Contact us" />
          </div>
          <p className="text-gray-600 text-sm leading-6 text-center">
            We are currently validating your documents with relevant bodies. You
            will be contacted directly should there be a need to confirm the
            information you have provided. Please ensure that your details are
            correct and up to date.
          </p>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default AwaitingVerificationModal;
  