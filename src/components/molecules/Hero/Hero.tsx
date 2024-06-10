import { Container, Title, Text, Button } from '@mantine/core';
import classes from './Hero.module.css';
import heroimage from '../../../../public/images/herocropped.png'

export function Hero() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              FIND ALL THE{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: '#FBD506', to: '#FBD506' }}
              >
                CS2 NADES
              </Text>{' '}
              You Need During Your Buy Period.
            </Title>

            <Text className={classes.description} mt={30}>FIND ALL THE CS2 SMOKES YOU NEED DURING YOUR BUY PERIOD.</Text>

            <Button
              size="md"
              className={classes.control}
              mt={40}
            >
              Sign Up
            </Button>
          </div>
          <img className={classes.heroimg} src={heroimage.src} />
        </div>
      </Container>
    </div>
  );
}