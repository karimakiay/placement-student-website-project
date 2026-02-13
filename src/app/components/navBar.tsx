'use client';

import { Flex, NavLink } from '@mantine/core';
import { ReactNode, useState } from 'react';
import styles from './navBar.module.css';
import { usePathname } from 'next/navigation';
import { useDisclosure } from '@mantine/hooks';
import { Burger, Stack } from '@mantine/core';
import { Drawer, Button } from '@mantine/core';

export default function NavBar(): ReactNode {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/events' },
    { label: 'Buy Tickets', href: '/buytickets' },
    { label: 'Frequently Asked Questions', href: '/faqs' },
    { label: 'Contact us', href: '/contact' },
  ];

  const path = usePathname();
  const [opened, { toggle, open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Menu">
          <Stack className={styles.navBar}>

      {navLinks.map((item, index) => (
        <NavLink
          key={item.label}
          className={styles.navLink}
          href={item.href}
          active={path === item.href}
          label={item.label}
        />
      ))}
    </Stack>
      </Drawer>
      <Burger opened = {opened} onClick={toggle} aria-label="toggle navigation"/>
    </>

  );


}
