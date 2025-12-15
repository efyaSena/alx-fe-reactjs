
import { useState } from "react";

const useAuth = () => {

  const [user] = useState({ loggedIn: false }); 
  return user;
};

export default useAuth;
