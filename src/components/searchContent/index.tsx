import { Box, Grid } from "@mui/material";

const Datas = [
  {
    name: 'Guillermo Rauch',
    id: '@rauchg',
    content: ['Coolest domain. Check', 'Coolest mission. Check', 'Coolest product. Check'],
    time: '5:48 PM',
    date: 'Sep 15, 2021',
    favourite: '36',
    avatar: '../../assets/images/avatar.png'
  },
  {
    name: 'Thomas Paul Mann',
    id: '@thomaspaulmann',
    content: ["I'm already rocking the new @calcom extension to coordinate my meetings 😎"],
    time: '6:19 AM',
    date: 'Sep 7, 2022',
    favourite: '3',
    avatar: '../../assets/images/avatar1.png'
  },
  {
    name: 'KP',
    id: '@thisiskp_',
    content: ['SaaS is eating the world', 'SaaS is eating the world', 'A lot of alternatives are rising up', 'Here are a few:', 'Calendly - @calcom', 'Airtable - @baserow', 'Zapier - @n8n_io', 'What else?'],
    time: '5:48 PM',
    date: 'Sep 15, 2021',
    favourite: '36',
    avatar: '../../assets/images/avatar2.png'
  },
  {
    name: 'Guillermo Rauch',
    id: '@rauchg',
    content: ['Coolest domain. Check', 'Coolest mission. Check', 'Coolest product. Check'],
    time: '5:48 PM',
    date: 'Sep 15, 2021',
    favourite: '36',
    avatar: '../../assets/images/avatar.png'
  },
  {
    name: 'Thomas Paul Mann',
    id: '@thomaspaulmann',
    content: ["I'm already rocking the new @calcom extension to coordinate my meetings 😎"],
    time: '6:19 AM',
    date: 'Sep 7, 2022',
    favourite: '3',
    avatar: '../../assets/images/avatar1.png'
  },
  {
    name: 'KP',
    id: '@thisiskp_',
    content: ['SaaS is eating the world', 'SaaS is eating the world', 'A lot of alternatives are rising up', 'Here are a few:', 'Calendly - @calcom', 'Airtable - @baserow', 'Zapier - @n8n_io', 'What else?'],
    time: '5:48 PM',
    date: 'Sep 15, 2021',
    favourite: '36',
    avatar: '../../assets/images/avatar2.png'
  },
  {
    name: 'Guillermo Rauch',
    id: '@rauchg',
    content: ['Coolest domain. Check', 'Coolest mission. Check', 'Coolest product. Check'],
    time: '5:48 PM',
    date: 'Sep 15, 2021',
    favourite: '36',
    avatar: '../../assets/images/avatar.png'
  },
  {
    name: 'Thomas Paul Mann',
    id: '@thomaspaulmann',
    content: ["I'm already rocking the new @calcom extension to coordinate my meetings 😎"],
    time: '6:19 AM',
    date: 'Sep 7, 2022',
    favourite: '3',
    avatar: '../../assets/images/avatar1.png'
  },
  {
    name: 'KP',
    id: '@thisiskp_',
    content: ['SaaS is eating the world', 'SaaS is eating the world', 'A lot of alternatives are rising up', 'Here are a few:', 'Calendly - @calcom', 'Airtable - @baserow', 'Zapier - @n8n_io', 'What else?'],
    time: '5:48 PM',
    date: 'Sep 15, 2021',
    favourite: '36',
    avatar: '../../assets/images/avatar2.png'
  },
  {
    name: 'Guillermo Rauch',
    id: '@rauchg',
    content: ['Coolest domain. Check', 'Coolest mission. Check', 'Coolest product. Check'],
    time: '5:48 PM',
    date: 'Sep 15, 2021',
    favourite: '36',
    avatar: '../../assets/images/avatar.png'
  },
  {
    name: 'Thomas Paul Mann',
    id: '@thomaspaulmann',
    content: ["I'm already rocking the new @calcom extension to coordinate my meetings 😎"],
    time: '6:19 AM',
    date: 'Sep 7, 2022',
    favourite: '3',
    avatar: '../../assets/images/avatar1.png'
  },
  {
    name: 'KP',
    id: '@thisiskp_',
    content: ['SaaS is eating the world', 'SaaS is eating the world', 'A lot of alternatives are rising up', 'Here are a few:', 'Calendly - @calcom', 'Airtable - @baserow', 'Zapier - @n8n_io', 'What else?'],
    time: '5:48 PM',
    date: 'Sep 15, 2021',
    favourite: '36',
    avatar: '../../assets/images/avatar2.png'
  },
  {
    name: 'Guillermo Rauch',
    id: '@rauchg',
    content: ['Coolest domain. Check', 'Coolest mission. Check', 'Coolest product. Check'],
    time: '5:48 PM',
    date: 'Sep 15, 2021',
    favourite: '36',
    avatar: '../../assets/images/avatar.png'
  },
  {
    name: 'Thomas Paul Mann',
    id: '@thomaspaulmann',
    content: ["I'm already rocking the new @calcom extension to coordinate my meetings 😎"],
    time: '6:19 AM',
    date: 'Sep 7, 2022',
    favourite: '3',
    avatar: '../../assets/images/avatar1.png'
  },
  {
    name: 'KP',
    id: '@thisiskp_',
    content: ['SaaS is eating the world', 'SaaS is eating the world', 'A lot of alternatives are rising up', 'Here are a few:', 'Calendly - @calcom', 'Airtable - @baserow', 'Zapier - @n8n_io', 'What else?'],
    time: '5:48 PM',
    date: 'Sep 15, 2021',
    favourite: '36',
    avatar: '../../assets/images/avatar2.png'
  },
]

function SearchContent() {
    return (
      <Box>
        <Grid container spacing={2}>
          {Datas.map((data, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3}>

              </Grid>
            )
          })}
        </Grid>
      </Box>
    );
}

export default SearchContent;