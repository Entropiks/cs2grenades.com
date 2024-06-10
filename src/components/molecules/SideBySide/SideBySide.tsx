"use client"

import { useState } from 'react';
import { Text, Title, Button, Image } from '@mantine/core';
import image from '../../../../public/images/dualimg.png';
import classes from './SideBySide.module.css';

interface SideBySideProps {
  flipped: boolean,
  useButton: boolean
}

export function SideBySide({ flipped, useButton }: SideBySideProps) {

  console.log(useButton);

  return (
    <>
      {flipped ?
        <div className={classes.wrapper}>
          <Image src={image.src} className={classes.image} />
          <div className={classes.bodyflipped}>
            <Title className={classes.title}>SIGN UP NOW</Title>
            <Text fz="sm" c="dimmed">For just $5 a month, you get access to over 625 CT and T sided smokes guaranteed to help you climb the MMR ladder.</Text>
            <div className={classes.controls}>
              {useButton ? <Button className={classes.control}>Sign Up</Button> : null}
            </div>
          </div>
        </div>
        :
        <div className={classes.wrapper}>
          <div className={classes.body}>
            <Title className={classes.title}>SIGN UP NOW</Title>
            <Text fz="sm" c="dimmed">For just $5 a month, you get access to over 625 CT and T sided smokes guaranteed to help you climb the MMR ladder.</Text>

            <div className={classes.controls}>
              {useButton ? <Button className={classes.control}>Sign Up</Button> : null}
            </div>
          </div>
          <Image src={image.src} className={classes.image} />
        </div>
      }
    </>
  );
}