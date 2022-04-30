import * as React from 'react'
import { AuthStatus } from './types';

export type AuthContextValue = {
  status: AuthStatus
}

type Props = {
  children: React.ReactNode;
};

export const AuthContext = React.createContext<AuthContextValue>({ status: 'loading' });

export function AuthContextProvider({ children }: Props): React.ReactElement {
  // const { status } = useWatchAuthStatus();
  const status: AuthStatus = 'loggedIn'

  const contextValue = React.useMemo(
    (): AuthContextValue => ({
      status,
    }),
    [status],
  );

  // if (status === 'loading') {
  //   return (
  //     <div>In Progress...</div>
  //   );
  // }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const authStatus = React.useContext(AuthContext)
  if (typeof authStatus === 'undefined') {
    throw new Error('useAuth must be used inside AuthContextProvider');
  }
  return authStatus;
}
