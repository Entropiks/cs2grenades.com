"use client"

import { Menu, Group, Center, Burger, Container, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './HeaderMenu.module.css';

const links = [
  { link: '/nades', label: 'Grenades' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/about', label: 'About' },
  { link: '/faqs', label: 'FAQs' },
  { link: '/contact', label: 'Contact' },
];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="xl">
        <div className={classes.inner}>
          <p>LOGO</p>
          <Group gap={5} visibleFrom="sm" className={classes.navlinks}>
            {items}
          </Group>
          <Group visibleFrom="sm">
            <Button className={classes.login} variant="outline" size="xs">Login</Button>
            <Button className={classes.signup} variant="outline" size="xs">Subscribe</Button>
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}