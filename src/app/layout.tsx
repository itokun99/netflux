import StyledComponentsRegistry from 'src/main/core/libraries/styled-component/registry';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
  );
}
