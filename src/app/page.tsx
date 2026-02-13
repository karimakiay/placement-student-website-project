import { Stack } from '@mantine/core';
import PageLayout from '@/app/genericLayout';
import { Image, SimpleGrid, Text, Mark, Divider, Flex, Group, Button, ScrollArea, AspectRatio } from '@mantine/core';
import { BackgroundImage, Center, Box } from '@mantine/core';
import { Container } from '@mantine/core';
import { Paper } from '@mantine/core';

const demoProps = {
    bg: 'var(--mantine-color-blue-light)',
    h: 50,
    mt: 'md',
  };

export default function Home() {
  return (
    <PageLayout title={'Tenterden'}>
      <Stack>
        
        <AspectRatio ratio={ 16 / 9 } >
      <iframe
        src="https://www.youtube.com/embed/ZsV-NjCnK1k?si=ul8WlNJX22BML1Z0"
        title="YouTube video player"
        style={{ border: 0 }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </AspectRatio>

    <Divider my="md" />
       <>
       <Flex justify="center">
        <h2>What We Do</h2>
        </Flex>
        <ScrollArea h={300} type="auto" offsetScrollbars scrollHideDelay={1500}>
      {<Text>
        
          <Text fw={700}>TENTERDEN FOLK DAY TRUST</Text><Text> is a registered charity formed in May 1994 to preserve and advance public education and appreciation of traditional and contemporary folk song, music, dance, traditions, crafts and folk arts as a part of the living heritage.  The Trust is supported by Tenterden Town Council, Ashford Borough Council and Kent County Council and a number of local and regional businesses and other community organisations. The Trust is affiliated to the English Folk Dance and Song Society and a member of The Ashford Federation of the Arts, The Association of Festival Organisers, and Produced in Kent and registered with the The Fundraising Regulator. The emphasis of our musical policy remains very much on traditional English folk song, music, and dance.  This is complemented by traditional crafts, folklore and traditions.  By it's very nature traditional folk music develops and changes, so we do not exclude contemporary material in a traditional style or performers who bring in experience of other musical styles or musical influences.  We draw many of our guests from South East England, particularly Kent and Sussex, and also include guests well known on the national folk scene.  We also feature world music, song and dance particularly where this has a connection with the local area through the material or performers.</Text>
          
          <Divider my="md" />
        
          <Text fw={700}>TENTERDEN FOLK CLUB / TENTERDEN FOLK SESSIONS:</Text> <Text>Tenterden Folk Sessions are a sing-a-round style get together in a local bar. Singers and musicians from all over Kent and Sussex meet with local performers from Ashford and Tenterden to sing and play a wide variety of traditional and contemporary acoustic music.  Performers may include unaccompanied singers of traditional folk songs; a singer songwriter who specialises in songs about Kent; a group who play a variety of traditional Irish music; a duo singing music hall songs; individual musicians playing guitar, melodeon, concertina, double bass, banjo, whistles, flute, violin, etc.  It just depends who turns up on the night!  One of the ideas of the club is to give as many people as possible a chance to join in, if they want to.  The club occasionally organises a special event for which a guest may be booked. </Text>

          <Divider my="md" />

          <Text fw={700}>EDUCATIONAL PROJECTS:</Text> <Text>The Trust organises various educational projects in local schools. Most recently the Trust has been working with the students at Wyvern School in Ashford but has worked in many schools across the South East.</Text>

          <Divider my="md" />

          <Text fw={700}>OCCASIONAL EVENTS:</Text> <Text>The Trust also promotes occasional concerts, barn dances and ceilidhs during the year, mostly, but not always, in the Tenterden and Ashford area.  We have been involved in concerts of Kentish folk songs, concerts with visiting artists who would not otherwise perform in the area and various special one off projects.  The barn dances and ceilidhs have usually been promoted with local bands to bring them to the attention of a wider audience and introduce more people to barn dances and ceilidhs with mainly English music.  The Trust also co-ordinated three days of folk song, music and dance in the Produced in Kent Village at the Kent County Show in 2006. The Trust also publishes Around Kent Folk magazine, a bi-monthly free guide to folk events in Kent, Surrey, Sussex and beyond. The Trust is also happy to work with other community organisations, including local authorities, clubs, charities, companies, individuals and other bodies on joint ventures and to be involved in other compatible local arts projects.  We can offer advice and assistance in organising folk events, such as barn dances, ceilidhs, concerts, workshops or other folk music, story-telling, folk-lore, craft and other related projects.  We do not act as a booking agency for performers but we can often put organisers and artists in touch with each other and offer advice on where to find the type of folk performer or act an organisation is looking for.</Text>
      
    
      </Text>}
    </ScrollArea>
      

      <Divider my="md" />
      


      
      <BackgroundImage
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png"
        radius="lg"
        h={200}>
        <Stack h={300} align="center" justify="center" gap="xs">
          <h1>
            The Tenterden Folk Festival
          </h1>
        </Stack>
      </BackgroundImage>
    
    <Flex justify="center">
      <Text>
        The annual Tenterden Folk Festival took place over the weekend of the first Saturday of October and ran for over 30 years.  The festival starts on Thursday with a special fundraising concert.  On Friday, Saturday and Sunday there are  over 50 events including an English barn dance, storytelling for adults and children, concerts, craft fair, artisans, music and other stalls, exhibitions, shows, dance displays, folk clubs, Morris dancers, Appalachian dancers, Slovakian Dancers, sing-a-rounds and music sessions, a procession, street theatre, West Gallery music, workshops, Showcases and other folk events. The final Tenterden Folk Festival took place in October 2024.

        

          Morris sides; the festival offers Morris sides and dance display teams a chance to get together and see each other perform and to meet socially in a friendly and casual atmosphere.  There are up to 50 sides present, with around half coming from the South East and the others from the rest of England.  Most styles of Morris are represented including Border and Cotswold Morris, with men's and women's sides, also Longsword, Rapper, Garland, Clog and Molly dancers.  Other dance display styles can include Scottish, Appalachian and Slovakian dancers.  As well as the displays and workshops, the dancers all take part in a procession, together with Hooden Horses, animal guisers and street entertainers.

          

          Sing-a-rounds and sessions; some of the most popular events at the festival are always the sing-a-rounds and sessions.  Local singers and musicians crowd the bars and back rooms of the town centre public houses to take their turn to perform or to join in the music sessions.  Very often they are joined by some of the festival guests who appreciate a chance to join in the grass roots of the music where most of them actually started.

          

          Festival guests; in addition to many local performers from the South East guests booked for the festival have included some of the country's leading folk musicians and barn dance bands. 

        

        Overseas Guests; the festival is pleased to welcome traditional folk groups from overseas, particularly where there is a local connection or special interest.  We also include local groups that play "world music". Our overseas guests have includes groups from Belgium, Romania, Slovakia, Holland, Germany, Austrailia, New Zealand, USA and South Africa.
      </Text>
      </Flex>
    

      <Group justify = "center" gap="xs" grow>
          <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"/>
          <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"/>
          <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"/>
      </Group>

      

      <Divider my="md" />

      
    </>
    <Group gap="xs" grow>
      <Button variant="default">Home</Button>
      <Button variant="default">Donate</Button>
      <Button variant="default">FAQ</Button>
      <Button variant="default">Conatct Us</Button>
    </Group>
      </Stack>
    </PageLayout>
  );
}
