import React, { ReactNode } from 'react'


// const provider = ({children  , session }) => {
//   return (
//     <SessionProvider session={session}>
//       {children}
//     </SessionProvider>
//   )
// }

import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

interface ProviderProps {
  children: ReactNode;
  session: Session;
}

const Provider: React.FC<ProviderProps> = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
};


export default Provider;