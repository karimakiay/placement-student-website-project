import { Flex, Stack } from '@mantine/core';
import NavBar from './components/navBar';
import './global.css';


export default function PageLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Stack>
      <Flex justify="center">
      <h1>{title}</h1>
      </Flex>
      <NavBar />
      {children}
    </Stack>
  );
}
