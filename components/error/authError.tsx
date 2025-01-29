import React from "react";

interface AuthErrorProps {
  message: string;
}

const AuthError: React.FC<AuthErrorProps> = ({ message }) => {
  return (
    <div className="flex items-center justify-center ">
        <p className="mt-4 text-red-600">
          {message}
        </p>
    </div>
  );
};

export default AuthError;
