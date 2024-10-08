
import { Navigate } from "react-router-dom";
import { logout, useCurrentUserToken } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { verifyToken } from "../../utils/verifyToken";
import { ReactNode } from "react";
import { toast } from "sonner";

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};
const ProtectedRoute = ({ children,role}: TProtectedRoute) => {

  console.log(role) 
  
  const token = useAppSelector(useCurrentUserToken);
  console.log(token)

  let user;

  if (token) {
    user = verifyToken(token);
  }

  const dispatch = useAppDispatch();
  
  if (role !== undefined && role !== user?.role ) {
    toast.success('You are unauthorized');

    dispatch(logout());
    return <Navigate to="/login" replace={true} />;
  }
  
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;