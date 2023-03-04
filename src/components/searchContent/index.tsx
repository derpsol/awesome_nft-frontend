import { Box, Grid, Typography, ImageList, ImageListItem, Button } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CachedIcon from '@mui/icons-material/Cached';

const Datas = [
  {
    name: 'Guillermo Rauch',
    id: '@rauchg',
    content: ['Coolest domain. Check', 'Coolest mission. Check', 'Coolest product. Check'],
    time: '5:48 PM',
    date: 'Sep 15, 2021',
    favourite: '36',
    avatar: './images/avatar.png'
  },
  {
    name: 'Thomas Paul Mann',
    id: '@thomaspaulmann',
    content: ["I'm already rocking the new @calcom extension to coordinate my meetings 😎"],
    time: '6:19 AM',
    date: 'Sep 7, 2022',
    favourite: '3',
    avatar: './images/avatar1.png'
  },
  {
    name: 'KP',
    id: '@thisiskp_',
    content: ['SaaS is eating the world', 'SaaS is eating the world', 'A lot of alternatives are rising up', 'Here are a few:', 'Calendly - @calcom', 'Airtable - @baserow', 'Zapier - @n8n_io', 'What else?'],
    time: '5:48 PM',
    date: 'Sep 15, 2021',
    favourite: '36',
    avatar: './images/avatar2.png'
  },
  {
    name: 'Guillermo Rauch',
    id: '@rauchg',
    content: ['Coolest domain. Check', 'Coolest mission. Check', 'Coolest product. Check'],
    time: '5:48 PM',
    date: 'Sep 15, 2021',
    favourite: '36',
    avatar: './images/avatar.png'
  },
  {
    name: 'Thomas Paul Mann',
    id: '@thomaspaulmann',
    content: ["I'm already rocking the new @calcom extension to coordinate my meetings 😎"],
    time: '6:19 AM',
    date: 'Sep 7, 2022',
    favourite: '3',
    avatar: './images/avatar1.png'
  },
  {
    name: 'KP',
    id: '@thisiskp_',
    content: ['SaaS is eating the world', 'SaaS is eating the world', 'A lot of alternatives are rising up', 'Here are a few:', 'Calendly - @calcom', 'Airtable - @baserow', 'Zapier - @n8n_io', 'What else?'],
    time: '5:48 PM',
    date: 'Sep 15, 2021',
    favourite: '36',
    avatar: './images/avatar2.png'
  },
  {
    name: 'Guillermo Rauch',
    id: '@rauchg',
    content: ['Coolest domain. Check', 'Coolest mission. Check', 'Coolest product. Check'],
    time: '5:48 PM',
    date: 'Sep 15, 2021',
    favourite: '36',
    avatar: './images/avatar.png'
  },
  {
    name: 'Thomas Paul Mann',
    id: '@thomaspaulmann',
    content: ["I'm already rocking the new @calcom extension to coordinate my meetings 😎"],
    time: '6:19 AM',
    date: 'Sep 7, 2022',
    favourite: '3',
    avatar: './images/avatar1.png'
  },
  {
    name: 'KP',
    id: '@thisiskp_',
    content: ['SaaS is eating the world', 'SaaS is eating the world', 'A lot of alternatives are rising up', 'Here are a few:', 'Calendly - @calcom', 'Airtable - @baserow', 'Zapier - @n8n_io', 'What else?'],
    time: '5:48 PM',
    date: 'Sep 15, 2021',
    favourite: '36',
    avatar: './images/avatar2.png'
  },
  {
    name: 'Guillermo Rauch',
    id: '@rauchg',
    content: ['Coolest domain. Check', 'Coolest mission. Check', 'Coolest product. Check'],
    time: '5:48 PM',
    date: 'Sep 15, 2021',
    favourite: '36',
    avatar: './images/avatar.png'
  },
  {
    name: 'Thomas Paul Mann',
    id: '@thomaspaulmann',
    content: ["I'm already rocking the new @calcom extension to coordinate my meetings 😎"],
    time: '6:19 AM',
    date: 'Sep 7, 2022',
    favourite: '3',
    avatar: './images/avatar1.png'
  },
  {
    name: 'KP',
    id: '@thisiskp_',
    content: ['SaaS is eating the world', 'SaaS is eating the world', 'A lot of alternatives are rising up', 'Here are a few:', 'Calendly - @calcom', 'Airtable - @baserow', 'Zapier - @n8n_io', 'What else?'],
    time: '5:48 PM',
    date: 'Sep 15, 2021',
    favourite: '36',
    avatar: './images/avatar2.png'
  },
  {
    name: 'Guillermo Rauch',
    id: '@rauchg',
    content: ['Coolest domain. Check', 'Coolest mission. Check', 'Coolest product. Check'],
    time: '5:48 PM',
    date: 'Sep 15, 2021',
    favourite: '36',
    avatar: './images/avatar.png'
  },
  {
    name: 'Thomas Paul Mann',
    id: '@thomaspaulmann',
    content: ["I'm already rocking the new @calcom extension to coordinate my meetings 😎"],
    time: '6:19 AM',
    date: 'Sep 7, 2022',
    favourite: '3',
    avatar: './images/avatar1.png'
  },
  {
    name: 'KP',
    id: '@thisiskp_',
    content: ['SaaS is eating the world', 'SaaS is eating the world', 'A lot of alternatives are rising up', 'Here are a few:', 'Calendly - @calcom', 'Airtable - @baserow', 'Zapier - @n8n_io', 'What else?'],
    time: '5:48 PM',
    date: 'Sep 15, 2021',
    favourite: '36',
    avatar: './images/avatar2.png'
  },
]

function SearchContent() {
    return (
      <Box mt='80px'>
        <ImageList variant="masonry" cols={4} gap={24}>
          {Datas.map((data, index) => {
            return (
              <ImageListItem key={index}>
                <Box
                  p='15px'
                  sx={{
                    borderRadius: '15px',
                    border: '2px solid black',
                    height: '100%',
                  }}
                >
                  <Box display='flex' alignItems='flex-start'>
                    <Box
                      component='img'
                      src={data.avatar}
                      sx={{
                        width: { sx: '32px', md: '56px'},
                        height: { sx: '32px', md: '56px'},
                      }}
                    />
                    <Box ml='8px'>
                      <Typography
                        fontFamily='Inter'
                        fontSize='20px'
                      >
                        {data.name}
                      </Typography>
                      <Typography
                        fontFamily='Inter'
                        fontSize='16px'
                        color='#9CA3AF'
                      >
                        {data.id}
                      </Typography>
                    </Box>
                  </Box>
                  <Box mt='8px'>
                    {data.content.map((content, index) => (
                      <Box key={index}>
                        <Typography
                          fontFamily='Inter'
                          fontSize='18px'
                        >
                          {content}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Box display='flex' mt='32px'>
                    <Typography
                      fontFamily='Inter'
                      fontSize='14px'
                      color='#9CA3AF'
                    >
                      {data.time}
                    </Typography>
                    <Typography
                      ml='12px'
                      fontFamily='Inter'
                      fontSize='14px'
                      color='#9CA3AF'
                    >
                      {data.date}
                    </Typography>
                  </Box>
                  <Box display='flex' mt='18px'>
                    <Box component='button' border='none' bgcolor='white' p='0px' color='#9CA3AF'>
                      <CachedIcon/>
                    </Box>
                    <Typography mx='12px' color='#9CA3AF'>{data.favourite}</Typography>
                    <Box color='#9CA3AF'>
                      <FavoriteBorderIcon/>
                    </Box>
                  </Box>
                </Box>
              </ImageListItem>
            )
          })}
        </ImageList>
      </Box>
    );
}

export default SearchContent;