import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

function Layout(props: LayoutProps) {
  return <>{props.children}</>;
}

export default Layout;
