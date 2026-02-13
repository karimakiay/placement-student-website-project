import PageLayout from '@/app/genericLayout';
import { ReactNode } from 'react';
import { events } from '../data';
import { Image } from '@mantine/core';
import { Flex, Text } from '@mantine/core';
import { Spoiler, ScrollArea } from '@mantine/core';


export default function Events(): ReactNode {
  const eventsData = events;
  return (
    <PageLayout title='Events'>
      <Image
      radius="lg"
      h={200}
      src="https://64.media.tumblr.com/275caa3599bc6a2f0a98f7938d3a7969/tumblr_o654c6q4Vy1vsbhjbo9_1280.jpg"
    />

    <Flex justify = "center">
    <h2>Upcoming events</h2>
    </Flex>
    
     
    {eventsData.map((item, index) => (
        // <NavLink
        //   key={item.label}
        //   className={styles.navLink}
        //   href={item.href}
        //   active={path === item.href}
        //   label={item.label}
        // />

        <Flex>
        <Flex direction="column">
            <h3>{item.title}</h3>
          <Image
            radius="md"
            h={200}
             w={450}
             fit="contain"
             src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"/>
         </Flex>
         <Flex justify="center" align="flex-start" direction="column">
         <p>{item.date}</p>
         <p>{item.time}</p>
         <p>{item.description}</p>
         <p>{item.venue}</p>
         <p>{item.tickets}</p>
         <p>{item.ticketLink}</p>
          
         </Flex>
            
         </Flex>








      ))}
    </PageLayout>
  );
}
