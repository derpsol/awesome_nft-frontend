import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  ImageList,
  ImageListItem,
  Button,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CachedIcon from "@mui/icons-material/Cached";
import Masonry from "@mui/lab/Masonry";

const Datas = [
  {
    name: "Guillermo Rauch",
    id: "@rauchg",
    content: [
      "Coolest domain. Check",
      "Coolest mission. Check",
      "Coolest product. Check",
    ],
    time: "5:48 PM",
    date: "Sep 15, 2021",
    favourite: "36",
    avatar: "./images/avatar.png",
  },
  {
    name: "Thomas Paul Mann",
    id: "@thomaspaulmann",
    content: [
      "I'm already rocking the new @calcom extension to coordinate my meetings 😎",
    ],
    time: "6:19 AM",
    date: "Sep 7, 2022",
    favourite: "3",
    avatar: "./images/avatar1.png",
  },
  {
    name: "KP",
    id: "@thisiskp_",
    content: [
      "SaaS is eating the world",
      "SaaS is eating the world",
      "A lot of alternatives are rising up",
      "Here are a few:",
      "Calendly - @calcom",
      "Airtable - @baserow",
      "Zapier - @n8n_io",
      "What else?",
    ],
    time: "5:48 PM",
    date: "Sep 15, 2021",
    favourite: "36",
    avatar: "./images/avatar2.png",
  },
  {
    name: "Guillermo Rauch",
    id: "@rauchg",
    content: [
      "Coolest domain. Check",
      "Coolest mission. Check",
      "Coolest product. Check",
    ],
    time: "5:48 PM",
    date: "Sep 15, 2021",
    favourite: "36",
    avatar: "./images/avatar.png",
  },
  {
    name: "Thomas Paul Mann",
    id: "@thomaspaulmann",
    content: [
      "I'm already rocking the new @calcom extension to coordinate my meetings 😎",
    ],
    time: "6:19 AM",
    date: "Sep 7, 2022",
    favourite: "3",
    avatar: "./images/avatar1.png",
  },
  {
    name: "KP",
    id: "@thisiskp_",
    content: [
      "SaaS is eating the world",
      "SaaS is eating the world",
      "A lot of alternatives are rising up",
      "Here are a few:",
      "Calendly - @calcom",
      "Airtable - @baserow",
      "Zapier - @n8n_io",
      "What else?",
    ],
    time: "5:48 PM",
    date: "Sep 15, 2021",
    favourite: "36",
    avatar: "./images/avatar2.png",
  },
  {
    name: "Guillermo Rauch",
    id: "@rauchg",
    content: [
      "Coolest domain. Check",
      "Coolest mission. Check",
      "Coolest product. Check",
    ],
    time: "5:48 PM",
    date: "Sep 15, 2021",
    favourite: "36",
    avatar: "./images/avatar.png",
  },
  {
    name: "Thomas Paul Mann",
    id: "@thomaspaulmann",
    content: [
      "I'm already rocking the new @calcom extension to coordinate my meetings 😎",
    ],
    time: "6:19 AM",
    date: "Sep 7, 2022",
    favourite: "3",
    avatar: "./images/avatar1.png",
  },
  {
    name: "KP",
    id: "@thisiskp_",
    content: [
      "SaaS is eating the world",
      "SaaS is eating the world",
      "A lot of alternatives are rising up",
      "Here are a few:",
      "Calendly - @calcom",
      "Airtable - @baserow",
      "Zapier - @n8n_io",
      "What else?",
    ],
    time: "5:48 PM",
    date: "Sep 15, 2021",
    favourite: "36",
    avatar: "./images/avatar2.png",
  },
  {
    name: "Guillermo Rauch",
    id: "@rauchg",
    content: [
      "Coolest domain. Check",
      "Coolest mission. Check",
      "Coolest product. Check",
    ],
    time: "5:48 PM",
    date: "Sep 15, 2021",
    favourite: "36",
    avatar: "./images/avatar.png",
  },
  {
    name: "Thomas Paul Mann",
    id: "@thomaspaulmann",
    content: [
      "I'm already rocking the new @calcom extension to coordinate my meetings 😎",
    ],
    time: "6:19 AM",
    date: "Sep 7, 2022",
    favourite: "3",
    avatar: "./images/avatar1.png",
  },
  {
    name: "KP",
    id: "@thisiskp_",
    content: [
      "SaaS is eating the world",
      "SaaS is eating the world",
      "A lot of alternatives are rising up",
      "Here are a few:",
      "Calendly - @calcom",
      "Airtable - @baserow",
      "Zapier - @n8n_io",
      "What else?",
    ],
    time: "5:48 PM",
    date: "Sep 15, 2021",
    favourite: "36",
    avatar: "./images/avatar2.png",
  },
  {
    name: "Guillermo Rauch",
    id: "@rauchg",
    content: [
      "Coolest domain. Check",
      "Coolest mission. Check",
      "Coolest product. Check",
    ],
    time: "5:48 PM",
    date: "Sep 15, 2021",
    favourite: "36",
    avatar: "./images/avatar.png",
  },
  {
    name: "Thomas Paul Mann",
    id: "@thomaspaulmann",
    content: [
      "I'm already rocking the new @calcom extension to coordinate my meetings 😎",
    ],
    time: "6:19 AM",
    date: "Sep 7, 2022",
    favourite: "3",
    avatar: "./images/avatar1.png",
  },
  {
    name: "KP",
    id: "@thisiskp_",
    content: [
      "SaaS is eating the world",
      "SaaS is eating the world",
      "A lot of alternatives are rising up",
      "Here are a few:",
      "Calendly - @calcom",
      "Airtable - @baserow",
      "Zapier - @n8n_io",
      "What else?",
    ],
    time: "5:48 PM",
    date: "Sep 15, 2021",
    favourite: "36",
    avatar: "./images/avatar2.png",
  },
  {
    name: "Guillermo Rauch",
    id: "@rauchg",
    content: [
      "Coolest domain. Check",
      "Coolest mission. Check",
      "Coolest product. Check",
    ],
    time: "5:48 PM",
    date: "Sep 15, 2021",
    favourite: "36",
    avatar: "./images/avatar.png",
  },
  {
    name: "Thomas Paul Mann",
    id: "@thomaspaulmann",
    content: [
      "I'm already rocking the new @calcom extension to coordinate my meetings 😎",
    ],
    time: "6:19 AM",
    date: "Sep 7, 2022",
    favourite: "3",
    avatar: "./images/avatar1.png",
  },
  {
    name: "KP",
    id: "@thisiskp_",
    content: [
      "SaaS is eating the world",
      "SaaS is eating the world",
      "A lot of alternatives are rising up",
      "Here are a few:",
      "Calendly - @calcom",
      "Airtable - @baserow",
      "Zapier - @n8n_io",
      "What else?",
    ],
    time: "5:48 PM",
    date: "Sep 15, 2021",
    favourite: "36",
    avatar: "./images/avatar2.png",
  },
  {
    name: "Guillermo Rauch",
    id: "@rauchg",
    content: [
      "Coolest domain. Check",
      "Coolest mission. Check",
      "Coolest product. Check",
    ],
    time: "5:48 PM",
    date: "Sep 15, 2021",
    favourite: "36",
    avatar: "./images/avatar.png",
  },
  {
    name: "Thomas Paul Mann",
    id: "@thomaspaulmann",
    content: [
      "I'm already rocking the new @calcom extension to coordinate my meetings 😎",
    ],
    time: "6:19 AM",
    date: "Sep 7, 2022",
    favourite: "3",
    avatar: "./images/avatar1.png",
  },
  {
    name: "KP",
    id: "@thisiskp_",
    content: [
      "SaaS is eating the world",
      "SaaS is eating the world",
      "A lot of alternatives are rising up",
      "Here are a few:",
      "Calendly - @calcom",
      "Airtable - @baserow",
      "Zapier - @n8n_io",
      "What else?",
    ],
    time: "5:48 PM",
    date: "Sep 15, 2021",
    favourite: "36",
    avatar: "./images/avatar2.png",
  },
];

function SearchContent() {
  const [marsonryHeight, setMasonryHeight] = useState(700);

  return (
    <Box mt="80px" position="relative">
      <Masonry
        sx={{ m: 0, overflow: "hidden", height: marsonryHeight, }}
        columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
        spacing={2}
      >
        {Datas.map((data, index) => {
          return (
            <Box
              sx={{
                borderRadius: "15px",
                border: "2px solid black",
              }}
              key={index}
            >
              <Box p="15px">
                <Box display="flex" alignItems="flex-start">
                  <Box
                    component="img"
                    src={data.avatar}
                    sx={{
                      width: { sx: "32px", md: "56px" },
                      height: { sx: "32px", md: "56px" },
                    }}
                  />
                  <Box ml="8px">
                    <Typography fontFamily="Inter" fontSize="20px">
                      {data.name}
                    </Typography>
                    <Typography
                      fontFamily="Inter"
                      fontSize="16px"
                      color="#9CA3AF"
                    >
                      {data.id}
                    </Typography>
                  </Box>
                </Box>
                <Box mt="8px">
                  {data.content.map((content, index) => (
                    <Box key={index}>
                      <Typography fontFamily="Inter" fontSize="18px">
                        {content}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Box display="flex" mt="32px">
                  <Typography
                    fontFamily="Inter"
                    fontSize="14px"
                    color="#9CA3AF"
                  >
                    {data.time}
                  </Typography>
                  <Typography
                    ml="12px"
                    fontFamily="Inter"
                    fontSize="14px"
                    color="#9CA3AF"
                  >
                    {data.date}
                  </Typography>
                </Box>
                <Box display="flex" mt="18px">
                  <Box
                    component="button"
                    border="none"
                    bgcolor="white"
                    p="0px"
                    color="#9CA3AF"
                  >
                    <CachedIcon />
                  </Box>
                  <Typography mx="12px" color="#9CA3AF">
                    {data.favourite}
                  </Typography>
                  <Box color="#9CA3AF">
                    <FavoriteBorderIcon />
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Masonry>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
          position: "absolute",
          bottom: 0,
          height: "500px",
          width: "100%",
        }}
      >
        <Box component="button" bgcolor="#141414" borderRadius="10px">
          show more +
        </Box>
      </Box>
    </Box>
  );
}

export default SearchContent;
