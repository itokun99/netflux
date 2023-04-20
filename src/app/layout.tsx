import StyledComponentsRegistry from '@/frontend/core/libraries/styled-component/registry';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
  );
}
